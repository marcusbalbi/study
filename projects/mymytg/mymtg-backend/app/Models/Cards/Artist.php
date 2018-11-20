<?php

namespace Balbi\MyMtg\Models\Cards;

use Balbi\MyMtg\Common\Model\EloquentModel as Model;

class Artist extends Model
{
    protected $table = 'artists';

    protected function setFilterSearch($queryBuilder, $filterParams)
    {
        extract($filterParams);
        
        if(isset($name)) {
            $queryBuilder->where('name', 'like', '%'.$name.'%');
        }
    }

    protected $fillable = ['name','phone'];
}
