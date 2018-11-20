<?php

namespace ListaCasamento\Models;

use Illuminate\Database\Eloquent\Model;

class Produtos extends Model
{
    protected $table = 'produtos';

    protected $guarded = ['id'];

    public static function buscar($data)
    {

        $query = self::query();

        if (!empty($data['descricao'])) {
            $query->where('descricao', 'like', '%' . $data['descricao'] . '%');
        }

        return $query->get();
    }
}
