<?php 

namespace Balbi\MyMtg\Http\Requests\Cards\Edition;

use Balbi\MyMtg\Common\Http\Requests\Request;

class StoreEditonRequest extends Request 
{

    public function rules()
    {
        return [
            'name' => 'required',
            'initials' => 'alpha|size:3',
            'realese_date' => 'date',
            'cards_amount' => 'numeric|max:1000',
            'block_id' => 'required|exists:blocks,id'
        ];
    }
}   
