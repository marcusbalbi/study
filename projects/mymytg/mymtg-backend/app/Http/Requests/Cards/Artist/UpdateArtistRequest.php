<?php 

namespace Balbi\MyMtg\Http\Requests\Cards\Artist;

use Balbi\MyMtg\Common\Http\Requests\Request;

class UpdateArtistRequest extends Request 
{

    public function rules()
    {
        return [
            'name' => 'required'
        ];
    }
}   
