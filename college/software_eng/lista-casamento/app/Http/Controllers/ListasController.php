<?php

namespace ListaCasamento\Http\Controllers;

use Illuminate\Http\Request;
use ListaCasamento\Models\Casais;
use ListaCasamento\Models\Listas;
use ListaCasamento\Models\Produtos;
use ListaCasamento\Models\ItemLista;

class ListasController extends Controller
{
    public function index ($casais_id, Request $request) 
    {
      $casal = Casais::findOrFail($casais_id);

       $busca = [
            'nome' => $request->get('nome', ''),
            'casais_id' => $casais_id
        ];

        $listas = Listas::buscar($busca);

        return view('listas.index', [
            'casal' => $casal,
            'listas' => $listas,
            'busca' => $busca
        ]);

    }

    public function create ($casais_id, Request $request)
    {
      try {
          $casal = Casais::findOrFail($casais_id);
          
          $produtos = Produtos::all();

          return view('listas.form', [
            'casal' => $casal,
            'produtos' => $produtos,
            'lista' => null,
            'itensLista' => []
          ]);

      } catch (\Exception $e) {
        return redirect("casais/{$casais_id}/listas");
      }
    }

    public function store ($casais_id, Request $request)
    {
        $lista = new Listas([
          'casais_id' => $casais_id,
          'nome' => $request->get('nome')
        ]);

        $lista->save();

        return $lista;
    }

    public function edit ($casais_id, $id, Request $request)
    {
      try {
          $casal = Casais::findOrFail($casais_id);

          $lista = Listas::obterLista($casais_id, $id);

          $itensLista = ItemLista::obterItens($id);

          $produtos = Produtos::all();

          return view('listas.form', [
            'casal' => $casal,
            'lista' => $lista,
            'produtos' => $produtos,
            'itensLista' => $itensLista
          ]);

      } catch (\Exception $e) {
        return redirect("casais/{$casais_id}/listas");
      }
    }

    public function update($casais_id, $id, Request $request)
    {
      try {
          $casal = Casais::findOrFail($casais_id);

          $lista = Listas::obterLista($casais_id, $id);

          $lista->nome = $request->get('nome');

          $lista->save();

          return $lista;


      } catch (\Exception $e) {
        return redirect("casais/{$casais_id}/listas");
      }
    }

    public function addItem ($casais_id, Request $request) {
        $itemLista = new ItemLista([
          'listas_id' => $request->get('listas_id'),
          'produtos_id' => $request->get('produtos_id'),
          'link' => $request->get('link')
        ]);
        
        $itemLista->save();

        return $itemLista;
    }

    public function removeItem ($casais_id, $id, Request $request) {
        
        return ItemLista::destroy($id);
    }
}
