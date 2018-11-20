<?php

namespace Balbi\MyMtg\Common\Model;

use Illuminate\Database\Eloquent\Model;

abstract class EloquentModel extends Model
{
    
    public function search(array $filter = [])
    {   
        $with = $filter['include'];
        $fields = $filter['fields'];
        $filterParams = $filter['filter'];
        $paginate = $filter['paginate'];
        
        $queryBuilder = $this->with($with);
        
        $this->setFilterSearch($queryBuilder, $filterParams);
        
        if($paginate) {
            return $queryBuilder->paginate($paginate['per_page'], $fields, 'page', $paginate['page']);    
        }
        
        return $queryBuilder->get($fields);
    }
    
    public function findWithFilter($id, array $filter = [])
    {
        $with = $filter['include'];
        $fields = $filter['fields'];
        
        return $this->where($this->primaryKey,'=', $id)
            ->with($with)
            ->first($fields);
        
    }
    
    protected function setFilterSearch($queryBuilder, $filterParams) 
    {
        //to be overwritten
    }
    
}
