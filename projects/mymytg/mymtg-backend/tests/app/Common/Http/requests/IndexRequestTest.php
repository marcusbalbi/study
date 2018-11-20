<?php

use Balbi\MyMtg\Common\Http\Requests\IndexRequest;

class IndexRequestTest extends TestCase
{
    /**
     * 
     * @param type $array
     * @return IndexRequest
     */
    private function buildRequestHelper($array = [])
    {
      return new IndexRequest($array);
    }
    
    /**
     * @test
     */
    public function indexRequestShouldHaveCorrectStructure()
    {
        $filter = $this->buildRequestHelper()->getFilter();
        
         $this->assertArrayHasKey('fields',  $filter);
         $this->assertArrayHasKey('include', $filter);
         $this->assertArrayHasKey('paginate',$filter);
         $this->assertArrayHasKey('sort',    $filter);
         $this->assertArrayHasKey('filter',   $filter);
         
        $this->assertEquals(['*'], $filter['fields']);
        $this->assertEquals(false, $filter['paginate']);
         
    }
    
    /**
     * @test
     */
    public function filterShouldReturnCorrectFields()
    {
        $filter = $this->buildRequestHelper(['fields' => 'age,name,created'])
            ->getFilter();

        $this->assertContains('age',     $filter['fields']);
        $this->assertContains('name',    $filter['fields']);
        $this->assertContains('created', $filter['fields']);
    }
    
    /**
     * @test
     */
    public function filterShouldReturnStarFieldOnEmptyFields()
    {
       $filter = $this->buildRequestHelper()->getFilter();

       $this->assertEquals(['*'], $filter['fields']);
    }
    
    /**
     * @test
     */
    public function filterShouldReturnCorrectPagination()
    {
       $filter = $this->buildRequestHelper(['paginate' => 'per_page=10,page=5'])->getFilter(); 
       
       $this->assertArrayHasKey('per_page',     $filter['paginate']);
       $this->assertArrayHasKey('page',         $filter['paginate']);
        
       $this->assertEquals('10',     $filter['paginate']['per_page']);
       $this->assertEquals('5',     $filter['paginate']['page']);
    }
    
    /**
     * @test
     */
    public function FilterShouldReturnCorrectFilterParams()
    {
       $filter = $this->buildRequestHelper(['filter' => 'name=Jhon,last_name=Doe'])->getFilter(); 
       
       $this->assertArrayHasKey('name',     $filter['filter']);
       $this->assertArrayHasKey('last_name',         $filter['filter']);
        
       $this->assertEquals('Jhon', $filter['filter']['name']);
       $this->assertEquals('Doe',  $filter['filter']['last_name']);
    }
    
}
