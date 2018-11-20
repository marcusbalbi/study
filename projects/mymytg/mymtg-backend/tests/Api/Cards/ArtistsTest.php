<?php

use Balbi\MyMtg\Models\Cards\Artist;

use Illuminate\Foundation\Testing\DatabaseTransactions;

class ArtistsTest extends TestCase {
	use DatabaseTransactions;

	protected $resourceRoute = 'api/artist';

	protected $artistCreated;

	public function setUp() {
		parent::setUp();

		//populate a bit
		$this->artistCreated = factory(Artist::class )->create();

	}

	/**
	 * @test
	 */
	public function shouldReturnArtists() {
		$result          = $this->json('GET', $this->resourceRoute)->assertResponseOK();
		$decodedResponse = json_decode($result->response->getContent(), true);

		//asserting that there is only 6 Artists of cards
		$this->assertTrue(count($decodedResponse['data']) > 0);
	}

	/**
	 * @test
	 */
	public function shouldReturnOneWithCorrectStructure() {
		$id = $this->artistCreated->id;

		$this->json('GET', $this->resourceRoute.'/'.$id)
			->assertResponseOK()
			->seeJsonStructure(['data' => [
					'created_at',
					'name',
					'id'
				]]);
	}

	/**
	 * @test
	 */
	public function shouldNotCreateArtist() {

		$response = $this->json('POST', $this->resourceRoute)
			->assertResponseStatus(400);

		$convertedContent = json_decode($response->response->getContent(), true);

		$errors = $convertedContent['errors'];
		$this->assertArrayHasKey('name', $errors['detail']);
	}

	/**
	 * @test
	 */
	public function shouldNotUpdateArtist() {
		$id = $this->artistCreated->id;

		$response = $this->json('PUT', $this->resourceRoute.'/'.$id)
			->assertResponseStatus(400);

		$convertedContent = json_decode($response->response->getContent(), true);

		$errors = $convertedContent['errors'];
		$this->assertArrayHasKey('name', $errors['detail']);

	}

	/**
	 * @test
	 */
	public function shouldUpdateArtist() {
		$id = $this->artistCreated->id;

		$response = $this->json('PUT', $this->resourceRoute.'/'.$id, ['name' => 'John doe'])
			->assertResponseOk();

		$this->assertEquals('John doe', $this->artistCreated->fresh()->name);

	}

	/**
	 * @test
	 */
	public function shouldCreateArtist() {
		$response = $this->json('POST', $this->resourceRoute, ['name' => 'John doe'])
			->assertResponseOk();

		$converted = json_decode(($response->response->getContent()), true);

		$this->assertEquals('John doe', $converted['data']['name']);

	}

	/**
	 * @test
	 */
	public function shouldDeleteArtist() {
		$id = $this->artistCreated->id;

		$response = $this->json('DELETE', $this->resourceRoute.'/'.$id)
			->assertResponseOk();

		$converted = json_decode(($response->response->getContent()), true);

		$this->assertTrue($converted['data']);

	}

}
