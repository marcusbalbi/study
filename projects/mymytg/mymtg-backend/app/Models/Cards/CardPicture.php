<?php

namespace Balbi\MyMtg\Models\Cards;

use Balbi\MyMtg\Common\Model\EloquentModel as Model;
use Balbi\MyMtg\Models\Cards\Artist;

class CardPicture extends Model
{
    protected $table = 'card_pictures';

    public function artist()
    {
        return $this->hasOne(Artist::class, 'id', 'artist_id');
    }
}
