@extends('layout')

@section('content')
  <h2 class="center-align">Cadastro de produtos</h2>
      <div class="row">
        <form method="POST" action="{{ empty($produto) ? '/produtos' : '/produtos/'.$produto->id }}">
         {{ csrf_field() }}
         @if(!empty($produto))
          <input type="hidden" name="_method" value="PUT" />
         @endif
        <div class="input-field">
          <input type="text" id="descricao" name="descricao" value="{{ !empty($produto) ? $produto->descricao : '' }}" />
          <label for="descricao">descricao</label>
        </div>
        <button class="btn">
          <i class="material-icons left">send</i>
          {{ !empty($produto) ? 'Alterar' : "Cadastrar" }}
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
            window.location = '/produtos'
          })
        })
      </script>
@endsection