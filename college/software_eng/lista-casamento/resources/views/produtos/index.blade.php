@extends('layout')
@section('content')
   <h2 class="center-align">Produtos</h2>
   <form method="GET" action="produtos">
     <div class="row">
      <div class="input-field col s6">
          <input value="{{ $search['descricao'] }}" name="descricao" id="descricao" type="text" class="validate">
          <label for="descricao">Descrição</label>
    </div>
       <div class="actions col s6">
          <button class="btn btn-large">
            <i class="material-icons left">search</i>
            Buscar
          </button>
          <button class="btn btn-large" id="limpar">
            <i class="material-icons left">autorenew</i>
            Limpar
          </button>
       </div>
     </div>
  </form>
      
      <table class="col s12 bordered striped responsive-table">
        <thead>
          <th>ID</th>
          <th >Produto</th>
          <th width="20%" colspan="2"><a class="btn btn-block" href="produtos/create" >Novo Produto<i class="material-icons left">card_giftcard</i></a></th>
        </thead>
        <tbody>
          @foreach($produtos as $produto)
            <tr>
              <td>{{ $produto->id }}</td>
              <td>{{ $produto->descricao }}</td>
              <td>
                 <a class="btn indigo lighten-1 editar-produto" href="#" data-id="{{ $produto->id }}">
                  <i class="material-icons">edit</i>
                </a>
                <a class="btn red darken-1 excluir-produto" href="#" data-id="{{ $produto->id }}">
                  <i class="material-icons">delete</i>
                </a>
              </td>
            </tr>
          @endforeach
        </tbody>
        </table>
      <script>
        var _token = '<?php echo csrf_token()  ?>';
        $(document).ready(function () {
          $("#limpar").on('click', function (e) {
            e.preventDefault();
            window.location = '/produtos'
          })

          $(".editar-produto").on('click', function (e) {
            window.location = 'produtos/' + $(this).data('id') + '/edit'
          })

          $('.excluir-produto').on('click', function (e) {
            var confirmado = confirm('Tem certeza que deseja excluir este produto?')

            if (confirmado) {
              $.post({
                url: '/produtos/' + $(this).data('id'),
                data: {
                  _method: 'DELETE',
                  _token: _token
                },
                success: function () {
                  window.location.reload()
                }
              })
            }
          })
        })
      </script>
@endsection
