<?php

namespace Balbi\Repositories;

use Illuminate\Support\Facades\DB;

/**
 * Description of VendasRepository
 *
 * @author Marcus
 */
class VendasRepository {

    public function BuscaPorVendasBetween($dataInicio, $dataFim) {
        return DB::table("vendas")->whereBetween('created_at', [$dataInicio, $dataFim])->sum('total') / 100;
    }

}
