<?php

namespace Balbi\MyMtg\Http\Controllers\Cards;

use Balbi\MyMtg\Common\Http\Requests\IndexRequest;
use Balbi\MyMtg\Http\Requests\Cards\Artist\StoreArtistRequest;
use Balbi\MyMtg\Http\Requests\Cards\Artist\UpdateArtistRequest;
use Balbi\MyMtg\Http\Controllers\Controller;
use Balbi\MyMtg\Models\Cards\Artist;

class ArtistsController extends Controller
{
    protected $artist;

    public function __construct(Artist $artist)
    {
        $this->artist = $artist;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(IndexRequest $request)
    {
        return $this->message($this->artist->search($request->getFilter()));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreArtistRequest $request)
    {
        return $this->message($this->artist->create($request->all()));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id, IndexRequest $request)
    {
        return $this->message($this->artist->findWithFilter($id, $request->getFilter()));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateArtistRequest $request, Artist $artist)
    {
        $artist->update($request->all());
        return $this->message($artist);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Artist $artist)
    {
       return $this->message($artist->delete());
    }
}
