<?php

use Balbi\MyMtg\Models\Cards\Block;

use Illuminate\Foundation\Testing\DatabaseTransactions;

class BlocksTest extends TestCase {
	use DatabaseTransactions;

	protected $resourceRoute = 'api/block';

	protected $blockCreated;

	public function setUp() {
		parent::setUp();

		//populate a bit
		$this->blockCreated = factory(Block::class )->create();

	}

	/**
	 * @test
	 */
	public function shouldReturnBlocks() {
		$result          = $this->json('GET', $this->resourceRoute)->assertResponseOK();
		$decodedResponse = json_decode($result->response->getContent(), true);

		//asserting that there is only 6 Artists of cards
		$this->assertTrue(count($decodedResponse['data']) > 0);
	}

	/**
	 * @test
	 */
	public function shouldReturnOneWithCorrectStructure() {
		$id = $this->blockCreated->id;

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
	public function shouldNotCreateBlock() {

		$response = $this->json('POST', $this->resourceRoute)
			->assertResponseStatus(400);

		$convertedContent = json_decode($response->response->getContent(), true);

		$errors = $convertedContent['errors'];

		$this->assertArrayHasKey('name', $errors['detail']);
	}

	/**
	 * @test
	 */
	public function shouldNotUpdateBlock() {
		$id = $this->blockCreated->id;

		$response = $this->json('PUT', $this->resourceRoute.'/'.$id)
			->assertResponseStatus(400);

		$convertedContent = json_decode($response->response->getContent(), true);

		$errors = $convertedContent['errors'];

		$this->assertArrayHasKey('name', $errors['detail']);

	}

	/**
	 * @test
	 */
	public function shouldUpdateBlock() {
		$id = $this->blockCreated->id;

		$response = $this->json('PUT', $this->resourceRoute.'/'.$id, ['name' => 'John doe'])
			->assertResponseOk();

		$this->assertEquals('John doe', $this->blockCreated->fresh()->name);

	}

	/**
	 * @test
	 */
	public function shouldCreateBlock() {
		$response = $this->json('POST', $this->resourceRoute, ['name' => 'John doe'])
			->assertResponseOk();

		$converted = json_decode(($response->response->getContent()), true);

		$this->assertEquals('John doe', $converted['data']['name']);

	}

	/**
	 * @test
	 */
	public function shouldDeleteArtist() {
		$id = $this->blockCreated->id;

		$response = $this->json('DELETE', $this->resourceRoute.'/'.$id)
			->assertResponseOk();

		$converted = json_decode(($response->response->getContent()), true);

		$this->assertTrue($converted['data']);

	}

}
