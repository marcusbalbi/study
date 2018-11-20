@extends('layout')
@section('content')
   <h3 class="center-align">Listas do Casal: {{ $casal->nomeCasal }}</h3>
   <form method="GET" action="listas">
     <div class="row">
      <div class="input-field col s6">
          <input value="{{ $busca['nome'] }}" name="nome" id="nome" type="text">
          <label for="nome">Nome</label>
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
          <th >Nome</th>
          <th width="30%" colspan="2"><a class="btn btn-block" href="listas/create" >Nova Lista<i class="material-icons left">list</i></a></th>
        </thead>
        <tbody>
          @foreach($listas as $lista)
            <tr>
              <td>{{ $lista->id }}</td>
              <td>{{ $lista->nome }}</td>
              <td>
                 <a class="btn indigo lighten-1 editar-lista" href="#" data-id="{{ $lista->id }}">
                  <i class="material-icons">edit</i>
                </a>
                <a class="btn red darken-1 excluir-lista" href="#" data-id="{{ $lista->id }}">
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
            window.location = 'listas'
          })

          $(".editar-lista").on('click', function (e) {
            window.location = 'listas/' + $(this).data('id') + '/edit'
          })

          $('.excluir-lista').on('click', function (e) {
            var confirmado = confirm('Tem certeza que deseja excluir esta Lista?')

            if (confirmado) {
              $.post({
                url: 'listas/' + $(this).data('id'),
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
