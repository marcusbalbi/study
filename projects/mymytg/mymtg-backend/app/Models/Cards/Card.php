<?php

namespace Balbi\MyMtg\Models\Cards;

use Balbi\MyMtg\Common\Model\EloquentModel as Model;
use Balbi\MyMtg\Models\Cards\CardEdition;
use Balbi\MyMtg\Models\Cards\CardColor;
use Balbi\MyMtg\Models\Cards\CardType;

class Card extends Model
{
    protected $table = 'cards';
    
    protected function setFilterSearch($queryBuilder, $filterParams)
    {
        
    }
    
    public function editions()
    {
        return $this->hasMany(CardEdition::class, 'card_id', 'id');
    }
    
    public function colors()
    {
        return $this->hasMany(CardColor::class, 'card_id', 'id');
    }
    
    public function types()
    {
        return $this->hasMany(CardType::class, 'card_id', 'id');
    }
}
