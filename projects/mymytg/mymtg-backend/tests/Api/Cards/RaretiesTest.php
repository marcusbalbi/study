<?php

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class RaretiesTest extends TestCase
{

    protected $maxRareties = 5;

    protected $resourceRoute = "api/rarety";

    /**
    * @test   
    */
    public function shouldReturnRareties()
    {
        $result = $this->json('GET',$this->resourceRoute)->assertResponseOK();
        $decodedResponse = json_decode($result->response->getContent(),true);

        //asserting that there is only 5 Rareties of cards
        $this->assertEquals(count($decodedResponse['data']),$this->maxRareties);
    }

    /**
    * @test
    */
    public function shouldReturnTypeWithCorrectStructure()
    {
        $id = mt_rand(1,$this->maxRareties);

        $this->json('GET',$this->resourceRoute.'/'.$id)
            ->assertResponseOK()
            ->seeJsonStructure([ 'data' => [
                    'created_at',
                    'name',
                    'weight',
                    'id' 
            ]]);
    }


    /**
    * @test
    */
    public function shouldNotEditType()
    {
        $this->json('POST',$this->resourceRoute,['name' => 'shouldNotWork', 'permanent' => false ])
            ->assertResponseStatus(405);

        $this->json('PUT',$this->resourceRoute,['name' => 'shouldNotWork', 'permanent' => false ])
            ->assertResponseStatus(405);

        $this->json('DELETE',$this->resourceRoute,['name' => 'shouldNotWork', 'permanent' => false ])
        ->assertResponseStatus(405);
    }

}
