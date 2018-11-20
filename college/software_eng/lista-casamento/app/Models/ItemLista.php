<?php

namespace ListaCasamento\Models;

use Illuminate\Database\Eloquent\Model;
use ListaCasamento\Models\Produtos;

class ItemLista extends Model
{
    protected $table = 'item_lista';

    protected $guarded = ['id'];

    public static function obterItens($listas_id)
    {
        $query = self::query();

        $query->where('listas_id', '=', $listas_id)
            ->with('produto');

        return $query->get();
    }

    public function produto ()
    {
        return $this->hasOne(Produtos::class, 'id','produtos_id');
    }
}
