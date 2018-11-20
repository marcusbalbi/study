@extends('master')

@section('nav')
	<li>TESTEANDO</li>

@endsection

@section('nav2')
	@parent
	<li>TESTEANDO</li>
	
@endsection

@section('content')
<h1>Ola Mundo!</h1>

@endsection 
	<!--
 //  @foreach($items as $item)
 //  		The Item is {{$item}}<br>
 //  @endforeach
//
//
 //  @if(count($items))
//	  There is Items
//	@else
//		There is no Items!
//		@endif
-->
