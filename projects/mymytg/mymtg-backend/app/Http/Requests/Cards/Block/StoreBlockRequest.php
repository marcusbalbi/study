<?php 

namespace Balbi\MyMtg\Http\Requests\Cards\Block;

use Balbi\MyMtg\Common\Http\Requests\Request;

class StoreBlockRequest extends Request 
{

    public function rules()
    {
        return [
            'name' => 'required'
        ];
    }
}   
