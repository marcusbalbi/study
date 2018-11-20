<?php

namespace Balbi\MyMtg\Http\Controllers\Cards;

use Illuminate\Http\Request;
use Balbi\MyMtg\Common\Http\Requests\IndexRequest;
use Balbi\MyMtg\Http\Controllers\Controller;
use \Balbi\MyMtg\Models\Cards\Type;

class TypesController extends Controller
{

    protected $type;

    public function __construct(Type $type)
    {
        $this->type = $type;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(IndexRequest $request)
    {
        return $this->message($this->type->search($request->getFilter()));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return $this->message($this->type->find($id));
    }
}
