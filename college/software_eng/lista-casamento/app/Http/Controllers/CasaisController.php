<?php

namespace ListaCasamento\Http\Controllers;

use Illuminate\Http\Request;
use ListaCasamento\Models\Casais;
class CasaisController extends Controller
{
    public function index (Request $request) 
    {
        $busca = [
            'marido' => $request->get('marido', ''),
            'esposa' => $request->get('esposa', '')
        ];

        $casais = Casais::buscar($busca);

        return view('casais.index', [
            'casais' => $casais,
            'search' => $busca
        ]);
    }

    public function create ()
    {
        return view('casais.form');
    }

    public function store (Request $request)
    {
        $casal = new Casais($request->all());

        $casal->save();

        return view('casais.index',[
            'casais' => Casais::buscar($request->all()),
            'search' => $request->all()
        ]);
    }

    public function edit ($id)
    {
        return view('casais.form', [
            'casal' => Casais::find($id)
        ]);
    }

    public function update ($id, Request $request)
    {
        $casal = Casais::find($id);

        $casal->marido = $request->get('marido');
        $casal->esposa = $request->get('esposa');

        $casal->save();

        return view('casais.index', [
            'casais' => Casais::buscar($request->all()),
            'search' => $request->all()
        ]);
    }

    public function destroy ($id)
    {
        return Casais::destroy($id);
    }

    public function show ($id)
    {
        return Casais::find($id);
    }
}
