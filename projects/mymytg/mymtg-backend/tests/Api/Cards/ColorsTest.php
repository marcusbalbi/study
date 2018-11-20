<?php

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class ColorsTest extends TestCase
{

    protected $maxColors = 6;

    protected $resourceRoute = "api/color";

    /**
    * @test   
    */
    public function shouldReturnColors()
    {
        $result = $this->json('GET',$this->resourceRoute)->assertResponseOK();
        $decodedResponse = json_decode($result->response->getContent(),true);

        //asserting that there is only 6 colors of cards
        $this->assertEquals(count($decodedResponse['data']),$this->maxColors);
    }

    /**
    * @test
    */
    public function shouldReturnOneWithCorrectStructure()
    {
        $id = mt_rand(1,$this->maxColors);

        $this->json('GET',$this->resourceRoute.'/'.$id)
            ->assertResponseOK()
            ->seeJsonStructure([ 'data' => [
                    'created_at',
                    'symbol_path',
                    'name',
                    'land_name',
                    'id' 
            ]]);
    }


    /**
    * @test
    */
    public function shouldNotEditColor()
    {
        $this->json('POST',$this->resourceRoute,['name' => 'shouldNotWork', 'permanent' => false ])
            ->assertResponseStatus(405);

        $this->json('PUT',$this->resourceRoute,['name' => 'shouldNotWork', 'permanent' => false ])
            ->assertResponseStatus(405);

        $this->json('DELETE',$this->resourceRoute,['name' => 'shouldNotWork', 'permanent' => false ])
        ->assertResponseStatus(405);
    }

}
