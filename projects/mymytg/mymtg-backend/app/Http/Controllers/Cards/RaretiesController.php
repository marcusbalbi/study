<?php

namespace Balbi\MyMtg\Http\Controllers\Cards;

use Illuminate\Http\Request;

use Balbi\MyMtg\Http\Requests;
use Balbi\MyMtg\Http\Controllers\Controller;
use \Balbi\MyMtg\Models\Cards\Rarety;

class RaretiesController extends Controller
{

    protected $rarety;

    public function __construct(Rarety $rarety)
    {
        $this->rarety = $rarety;
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return $this->message($this->rarety->all());
    }
    
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Rarety $rarety)
    {
        return $this->message($rarety);
    }
}
