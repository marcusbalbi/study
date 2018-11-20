<?php 

namespace Balbi\MyMtg\Http\Requests\Cards\Edition;

use Balbi\MyMtg\Common\Http\Requests\Request;
use \Balbi\MyMtg\Http\Requests\Cards\Edtion\StoreEdtionRequest;

class UpdateEditionRequest extends StoreEdtionRequest
{

    public function rules()
    {
        return [
            'name' => 'required'
        ];
    }
}   
