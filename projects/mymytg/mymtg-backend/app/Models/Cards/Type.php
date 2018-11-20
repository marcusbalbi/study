<?php

namespace Balbi\MyMtg\Models\Cards;

use Balbi\MyMtg\Common\Model\EloquentModel as Model;

class Type extends Model
{
    protected $table = "types";

    
    protected function setFilterSearch($queryBuilder, $filterParams)
    {
        extract($filterParams);

        if(isset($permanent)) {
            $queryBuilder->where('permanent', '=', $permanent);
        }
    }
}
