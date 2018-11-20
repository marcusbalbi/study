@extends('layout')

@section('content')
  <h2 class="center-align">Cadastro de Casais</h2>
      <div class="row">
        <form method="POST" action="{{ empty($casal) ? '/casais' : '/casais/'.$casal->id }}">
         {{ csrf_field() }}
         @if(!empty($casal))
          <input type="hidden" name="_method" value="PUT" />
         @endif
        <div class="input-field">
          <input type="text" id="marido" name="marido" value="{{ !empty($casal) ? $casal->marido : '' }}" />
          <label for="marido">Marido</label>
        </div>
         <div class="input-field">
          <input type="text" id="esposa" name="esposa" value="{{ !empty($casal) ? $casal->esposa : '' }}" />
          <label for="esposa">Esposa</label>
        </div>
        <button class="btn">
          <i class="material-icons left">send</i>
          {{ !empty($casal) ? 'Alterar' : "Cadastrar" }}
        </button>
        <button class="btn" id="voltar">
          <i class="material-icons left" >arrow_back</i>
          Voltar
        </button>
      </form>
      </div>
      <script>
        $(document).ready(function () {
          $("#voltar").on('click', function (e) {
            e.preventDefault();
            window.location = '/casais'
          })
        })
      </script>
@endsection