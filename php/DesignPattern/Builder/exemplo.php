<?php

use Balbi\Builder\NotaFiscal\NotaFiscalBuilder;
use Balbi\Builder\NotaFiscal\ItemNotaFiscal;

$nfBuilder  = new NotaFiscalBuilder();

$notaFiscal1 = $nfBuilder->comCnpj("1234567891011")
          ->comDataEmissao(date("Y-m-d"))
          ->comObservacao("OBSERVACAO DA NOTA")
        ->addItem(new ItemNotaFiscal(100, 2))
        ->addItem(new ItemNotaFiscal(50, 4))
        ->build();


$notaFiscal2 = $nfBuilder->addItem(new ItemNotaFiscal(10, 5))->build();


var_dump($notaFiscal2);