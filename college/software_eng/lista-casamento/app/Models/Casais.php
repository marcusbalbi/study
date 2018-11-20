<?php

namespace ListaCasamento\Models;

use Illuminate\Database\Eloquent\Model;

class Casais extends Model
{
    protected $table = 'casais';

    protected $guarded = ['id'];

    public function getNomeCasalAttribute()
    {
        return $this->marido.' e '.$this->esposa;
    }

    public static function buscar($data) {

        $query = self::query();

        if (!empty($data['marido'])) {
            $query->where('marido', 'like', '%' . $data['marido'] . '%');
        }

        if(!empty($data['esposa'])) {
            $query->where('esposa', 'like', '%' . $data['esposa'] . '%');
        }

        return $query->get();
    }
}
