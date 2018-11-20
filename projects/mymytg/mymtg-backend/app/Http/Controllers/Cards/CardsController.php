<?php

namespace Balbi\MyMtg\Http\Controllers\Cards;

use Balbi\MyMtg\Common\Http\Requests\IndexRequest;
use Balbi\MyMtg\Http\Controllers\Controller;

use Balbi\MyMtg\Models\Cards\Card;

class CardsController extends Controller {
	protected $cards;

	public function __construct(Card $card) {
		$this->cards = $card;
	}
	/**
	 * Display a listing of the resource.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function index(IndexRequest $request) {
		return $this->message($this->cards->search($request->getFilter()));
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @return \Illuminate\Http\Response
	 */
	public function store(StoreCardRequest $request) {
		return $this->message($this->cards->create($request->all()));
	}

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id, IndexRequest $request)
    {
        return $this->message($this->cards->findWithFilter($id, $request->getFilter()));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateCardRequest $request, Card $card)
    {
        $card->update($request->all());
        return $this->message($card);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Card $card)
    {
       return $this->message($card->delete());
    }
}
