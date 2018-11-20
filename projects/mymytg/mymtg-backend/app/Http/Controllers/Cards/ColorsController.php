<?php

namespace Balbi\MyMtg\Http\Controllers\Cards;

use Illuminate\Http\Request;

use Balbi\MyMtg\Http\Requests;
use Balbi\MyMtg\Http\Controllers\Controller;
use \Balbi\MyMtg\Models\Cards\Color;

class ColorsController extends Controller
{

    protected $color;

    public function __construct(Color $color)
    {
        $this->color = $color;
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return $this->message($this->color->all());
    }
    
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Color $color)
    {
        return $this->message($color);
    }
}
