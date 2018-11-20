<?php

namespace Balbi\MyMtg\Models\Cards;

use Balbi\MyMtg\Common\Model\EloquentModel as Model;
use Balbi\MyMtg\Models\Cards\Block;

class Edition extends Model
{
    protected $table = "editions";
    
    protected $fillable = ['name', 'realese_date', 'initials', 'cards_amount', 'block_id'];
    
    
    public function block()
    {
        return $this->hasOne(Block::class,'id', 'block_id');
    }
    
    protected function setFilterSearch($queryBuilder, $filterParams)
    {
        extract($filterParams);
        
        if (isset($release_date)) {
			$queryBuilder->where('realese_date', '=', $release_date);
		}

		if (isset($initials)) {
			$queryBuilder->where('initials', '=', $initials);
		}

		if (isset($cards_amount)) {
			$queryBuilder->where('cards_amount', '=', $cards_amount);
		}

		if (isset($block_id)) {
			$queryBuilder->where('block_id', '=', $block_id);
		}
    }
    
}
