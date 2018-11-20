<?php

namespace Balbi\MyMtg\Models\Cards;

use Balbi\MyMtg\Common\Model\EloquentModel as Model;
use Balbi\MyMtg\Models\Cards\Edition;
use Balbi\MyMtg\Models\Cards\Rarety;
use Balbi\MyMtg\Models\Cards\CardPicture;
class CardEdition extends Model
{
    protected $table = 'card_editions';
    
    
    public function edition()
    {
        return $this->hasOne(Edition::class, 'id', 'edition_id');
    }
    
    public function rarety()
    {
        return $this->hasOne(Rarety::class, 'id', 'rarety_id');
    }
    
    public function picture()
    {
        return $this->hasOne(CardPicture::class, 'id', 'picture_id');
    }
}
