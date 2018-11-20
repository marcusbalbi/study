<?php

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class TypesTest extends TestCase
{

    protected $maxTypes = 8;

    protected $resourceRoute = "api/type";

    /**
    * @test   
    */
    public function shouldReturnTypes()
    {
        $result = $this->json('GET',$this->resourceRoute)->assertResponseOK();
        $decodedResponse = json_decode($result->response->getContent(),true);

        //asserting that there is only 8 types of cards
        $this->assertEquals(count($decodedResponse['data']),$this->maxTypes);
    }

    /**
    * @test
    */
    public function shouldReturnOneWithCorrectStructure()
    {
        $id = mt_rand(1,$this->maxTypes);

        $this->json('GET',$this->resourceRoute.'/'.$id)
            ->assertResponseOK()
            ->seeJsonStructure([ 'data' => [
                    'created_at',
                    'name',
                    'permanent',
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
