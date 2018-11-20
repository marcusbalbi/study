<?php

namespace ListaCasamento\Http\Controllers;

use Illuminate\Http\Request;
use ListaCasamento\Models\Produtos;

class ProdutosController extends Controller
{
    public function index(Request $request)
    {
        $busca = [
            'descricao' => $request->get('descricao', '')
        ];

        $produtos = Produtos::buscar($busca);

        return view('produtos.index', [
            'produtos' => $produtos,
            'search' => $busca
        ]);
    }

    public function create()
    {
        return view('produtos.form');
    }

    public function store(Request $request)
    {
        $produto = new Produtos($request->all());

        $produto->save();

        return view('produtos.index', [
            'produtos' => Produtos::buscar($request->all()),
            'search' => $request->all()
        ]);
    }

    public function edit($id)
    {
        return view('produtos.form', [
            'produto' => Produtos::find($id)
        ]);
    }

    public function update($id, Request $request)
    {
        $produto = Produtos::find($id);

        $produto->descricao = $request->get('descricao');

        $produto->save();

        return view('produtos.index', [
            'descricao' => Produtos::buscar($request->all()),
            'search' => $request->all()
        ]);
    }

    public function destroy($id)
    {
        return Produtos::destroy($id);
    }

    public function show($id)
    {
        return Produtos::find($id);
    }
}
