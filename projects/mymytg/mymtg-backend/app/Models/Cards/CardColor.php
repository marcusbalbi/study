<?php

namespace Balbi\MyMtg\Models\Cards;

use Balbi\MyMtg\Common\Model\EloquentModel as Model;
use Balbi\MyMtg\Models\Cards\Color;

class CardColor extends Model
{
    protected $table = 'card_colors';
    
    
    public function color()
    {
        return $this->hasOne(Color::class, 'id', 'color_id');
    }
}
