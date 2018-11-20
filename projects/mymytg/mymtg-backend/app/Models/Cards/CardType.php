<?php

namespace Balbi\MyMtg\Models\Cards;

use Balbi\MyMtg\Common\Model\EloquentModel as Model;
use Balbi\MyMtg\Models\Cards\Type;

class CardType extends Model
{
    protected $table = "card_types";
    
    
    public function type()
    {
        return $this->hasOne(Type::class, 'id', 'type_id');
    }
}
