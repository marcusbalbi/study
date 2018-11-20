@extends('layout')
@section('content')
   <h2 class="center-align">Lista de Casais</h2>
   <form method="GET" action="casais">
     <div class="row">
      <div class="input-field col s3">
          <input value="{{ $search['marido'] }}" name="marido" id="marido" type="text" class="validate">
          <label for="marido">Marido</label>
    </div>
     <div class="input-field col s3">
          <input value="{{ $search['esposa'] }}" name="esposa" id="esposa" type="text" class="validate">
          <label for="esposa">Esposa</label>
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
          <th >Marido</th>
          <th>Esposa</th>
          <th width="30%" colspan="2"><a class="btn btn-block" href="casais/create" >Novo Casal<i class="material-icons left">wc</i></a></th>
        </thead>
        <tbody>
          @foreach($casais as $casal)
            <tr>
              <td>{{ $casal->id }}</td>
              <td>{{ $casal->marido }}</td>
              <td>{{ $casal->esposa }}</td>
              <td>
                <a class="btn" href="casais/{{ $casal->id }}/listas">
                  <i class="material-icons">list</i>
                </a>
                 <a class="btn indigo lighten-1 editar-casal" href="#" data-id="{{ $casal->id }}">
                  <i class="material-icons">edit</i>
                </a>
                <a class="btn red darken-1 excluir-casal" href="#" data-id="{{ $casal->id }}">
                  <i class="material-icons">delete</i>
                </a>
              </td>
            </tr>
          @endforeach
        </tbody>
        </table>
      <script>
        $(document).ready(function () {
          $("#limpar").on('click', function (e) {
            e.preventDefault();
            window.location = '/casais'
          })

          $(".editar-casal").on('click', function (e) {
            window.location = 'casais/' + $(this).data('id') + '/edit'
          })

          $('.excluir-casal').on('click', function (e) {
            var confirmado = confirm('Tem certeza que deseja excluir este casal?')

            if (confirmado) {
              $.post({
                url: '/casais/' + $(this).data('id'),
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
