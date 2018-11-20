<?php 

namespace Balbi\MyMtg\Http\Requests\Cards\Artist;

use Balbi\MyMtg\Common\Http\Requests\Request;

class StoreArtistRequest extends Request 
{

    public function rules()
    {
        return [
            'name' => 'required'
        ];
    }
}   
