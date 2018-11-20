<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

Route::get('/', function()
{
	
	//return View::make('hello',
	//	array('coisa'=>"coisinha",'teste'=>'OLA'));

	//return View::make('hello')->with('coisinha',"OLA");

	//$data = array('coisa'=>"coisinha",'teste'=>'ola');
	$view = View::make('hello');
	//$view->coisa = $data['coisa'];
	//$view->teste = $data['teste'];

	$view->items = array('item1','item2','item3','item4');


	return $view;

});

Route::get('/db',function(){

	//$posts = DB::select('SELECT * FROM POSTS');

	//dd($posts);

	$title = "TITULOOO";
	$body = "MEU BODY MODA FOCA";

	/*DB::insert("insert into posts(title,text)
	 values(:title,:body)",array(':title'=>$title,':body'=>$body));
	*/

	//DB::update('update posts set title = ?',array('abcd'));
	
	//DB::delete('delete from posts where id = 1');
	
		//$var = DB::only('select title from posts where id = 2');
		//dd($var);

});


Route::get('/db2',function(){

	//$posts = DB::table('posts')->get();
	//dd($posts);

	//$posts = DB::table('posts')->first();
	//dd($posts);

	//VARIOS WHERES DIFERENTES USA-SE O GET PARA PEGAR 
	//OS DADOS
	//$posts = DB::table('posts')->where('id','!=',3)->get();
	//$posts = DB::table('posts')->where('id','=',3)->get();
	//$posts = DB::table('posts')->where('id','<',3)->get();
	////LISTA TODOS OS TTTLE DENTRO DE ARRAY
	//$posts = DB::table('posts')->lists('title');
	////PLUCK RETIRA A COLUNA QUE VOCE QUER
	//$posts = DB::table('posts')->where('id','<=',2)->pluck('title');
	////SELECIONANDO APENAS ALGUMAS COLUNAS
	//$posts = DB::table('posts')->select('title','id','text')->get();
	////SELECIONANDO COLUNAS COM NOMES PERSONALIZAODS
	//$posts = DB::table('posts')->select('title as a','id as b','text as c')->get();
	////PODE SE USAR O DISTINCT
	//$posts = DB::table('posts')->distinct()->get();
	//OUTRA FORMA DE LISTS PODE USAR AS
	//$posts = DB::table('posts')->get(array('title'));
	//OR WHERE
	/*$posts =  DB::table('posts')
                    ->where('id', '>', 1)
                    ->orWhere('title', 'abcd')
                    ->get();*/

       //UTILIZANDO BETWEEN
     // $posts =  DB::table('posts')
       //             ->whereBetween('id', array(1, 2))->get();

//		$posts = DB::table('posts')
//                    ->whereIn('id', array(1, 2, 3))->get();
//	
	//$posts = DB::table('posts')
    //                ->whereNotIn('id', array(1, 2, 3))->get();
	//
// INSERT
    //  //              $id = DB::table('posts')
    //  //              ->insert(array(
	//					'title'=>'OLA MUNDO',
	//					'text'=>'funcionou'
      //              	));
      //$posts= DB::table('posts')->get();


	//dd($posts);


});

Route::get('/eloquent',function(){
	//$usuarios = Usuario::all();
//
//$usuarios = Usuario::find(1);
	//TUDO QUE USOU NO QUERY BUILDER FLUENT
	// POSDE SER USADIO
	//AQUI
	$usuarios = Usuario::find(2)->pluck('email');

	$usuario = new Usuario();

	//$usuario->email = "joao@gmail.com";
	//$usuario->password = "1234560";
//
//	//$usuario->save();
//

	//Usuario::Create(array(
	//	'email'=>'joana@gmail.com',
	//	'password'=>'123456'
	//	));
//
//
//	$user = Usuario::find(1);
//
//	$user->email = "abcd";
//	$user->password  = Hash::make('123456');
//
//	$user->save();
//

	
	//dd($usuarios);
});


Route::get('/about',function(){
	return View::make('home.about');
});