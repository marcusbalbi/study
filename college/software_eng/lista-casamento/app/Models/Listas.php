<?php

namespace ListaCasamento\Models;

use Illuminate\Database\Eloquent\Model;

class Listas extends Model
{
    protected $table = 'listas';

    protected $guarded = ['id'];

    public static function buscar($data) {

        $query = self::query();

        if (!empty($data['casais_id'])) {
            $query->where('casais_id', '=', $data['casais_id']);
        }

        if(!empty($data['nome'])) {
            $query->where('nome', 'like', '%' . $data['nome'] . '%');
        }

        return $query->get();
    }

    public static function obterLista($casais_id, $id) {

        $query = self::query();

        $query->where('casais_id', '=', $casais_id)
            ->where('id', '=', $id);
        
        $lista = $query->get();

        if($lista->count() == 0) {
            throw new \Exception('Lista não encontrada');
        }
        return $lista[0];
    }
}
