<?php 

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Balbi\MyMtg\Common\Http\Support\BaseJsonResponseMessage;

class BaseJsonResponseMessageTest extends TestCase
{

    public function testSetData()
    {
        $b = new BaseJsonResponseMessage();

        $b->setData(['name' => 'FooBar']);

        $this->assertArrayHasKey('name',$b->getData());
    }

    /**
    * @test
    */
    public function testJsonResponse()
    {
        $b = new BaseJsonResponseMessage();
        $b->setData(['name' => 'FooBar']);

        $jsonResponse = $b->toJson();
        $convertedResponse = json_decode($jsonResponse,true);

        $this->assertNotNull($convertedResponse);

        $this->assertArrayHasKey('data',$convertedResponse);
    }

     /**
    * @test
    */
    public function shouldReturnAEmptyDataArray()
    {
        $b = new BaseJsonResponseMessage();

        $jsonResponse = $b->toJson();
        $convertedResponse = json_decode($jsonResponse,true);

        $this->assertTrue(count($convertedResponse['data']) === 0);
    }
}