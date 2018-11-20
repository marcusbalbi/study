<?php

namespace Balbi\MyMtg\Http\Controllers\Cards;

use Balbi\MyMtg\Common\Http\Requests\IndexRequest;
use Balbi\MyMtg\Http\Controllers\Controller;
use Balbi\MyMtg\Http\Requests\Cards\Edition\StoreEditonRequest;

use Balbi\MyMtg\Models\Cards\Edition;

class EditionsController extends Controller {
	protected $edition;

	public function __construct(Edition $edition) {
		$this->edition = $edition;
	}
	/**
	 * Display a listing of the resource.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function index(IndexRequest $request) {
		return $this->message($this->edition->search($request->getFilter()));
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @return \Illuminate\Http\Response
	 */
	public function store(StoreEditonRequest $request) {
		return $this->message($this->edition->create($request->all()));
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return \Illuminate\Http\Response
	 */
	public function show(Edition $edition) {
		return $this->message($edition);
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @param  int  $id
	 * @return \Illuminate\Http\Response
	 */
	public function update(UpdateEditionRequest $request, Edition $edition) {
		$edition->update($request->all());
		return $this->message($edition);
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return \Illuminate\Http\Response
	 */
	public function destroy(Edition $edition) {
		return $this->message($edition->delete());
	}
}
