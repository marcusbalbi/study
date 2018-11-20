<?php

class Usuario extends Eloquent{
	//O NOME DA TABELA
	protected $table = "usuariosp";

	//SE VC VAI USAR AS COLUNAS
	// CRIADAADS PELO MIGRATION CREATED_AT , UPDATED_AT
	public  $timestamps = false;

	public static $unguarded = true;
}


?>