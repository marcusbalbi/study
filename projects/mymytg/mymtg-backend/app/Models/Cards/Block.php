<?php

namespace Balbi\MyMtg\Models\Cards;

use Balbi\MyMtg\Common\Model\EloquentModel as Model;

class Block extends Model
{

    protected $table = 'blocks';
    protected $fillable = ['name'];

    protected function setFilterSearch($queryBuilder, $filterParams)
    {
        extract($filterParams);

        if (isset($name)) {
            $queryBuilder->where('name', 'like', '%' . $name . '%');
        }
    }
}
