<?php

namespace Balbi\MyMtg\Http\Controllers\Cards;

use Illuminate\Http\Request;

use Balbi\MyMtg\Http\Requests\Cards\Block\StoreBlockRequest;
use Balbi\MyMtg\Http\Requests\Cards\Block\UpdateBlockRequest;
use Balbi\MyMtg\Http\Controllers\Controller;
use Balbi\MyMtg\Models\Cards\Block;
use Balbi\MyMtg\Common\Http\Requests\IndexRequest;

class BlocksController extends Controller
{
    protected $block;

    public function __construct(Block $block)
    {
        $this->block = $block;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(IndexRequest $request)
    {   
       return $this->message($this->block->search($request->getFilter()));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreBlockRequest $request)
    {
        return $this->message($this->block->create($request->all()));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Block $block)
    {
        return $this->message($block);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateBlockRequest $request, Block $block)
    {
        return $this->message($block->update($request->all()));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Block $block)
    {
       return $this->message($block->delete());
    }
}
