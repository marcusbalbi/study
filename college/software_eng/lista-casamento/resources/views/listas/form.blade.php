@extends('layout')

@section('content')
  <h3 class="center-align">Lista do Casal: {{ $casal->nomeCasal }}</h3>
      <div class="row">
        <form>
        <div class="input-field">
          <input type="text" id="nome" name="nome" value="{{ !empty($lista) ? $lista->nome : '' }}" />
          <label for="lista">Nome da Lista</label>
        </div>
         <div class="row">
            <button id="salvarLista" class="btn">
            <i class="material-icons left">send</i>
            {{ !empty($lista) ? 'Alterar Lista' : "Cadastrar Lista" }}
          </button>
        <button class="btn" id="voltar">
          <i class="material-icons left" >arrow_back</i>
          Voltar
        </button>
         </div>
      </form>
        <div class="list-itens hide">
          <div class="row" >
            <div class="input-field col s4">
              <select id="produto">
                <option value="" selected>Selecione o Produto</option>
                @foreach($produtos as $produto)
                <option value="{{ $produto->id }}">{{ $produto->descricao }}</option>
                @endforeach
              </select>
              <label>Produto</label>
            </div>
             <div class="col s6 input-field">
                <input type="text" id="link" name="link" />
                <label for="lista">Link do Produto</label>
            </div>
            <div class="input-field actions col s2">
              <button id="addItem" class="btn">Adicionar</button>
            </div>
          </div>
          <div class="row" >
            <table class="bordered striped responsive-table">
              <thead>
                <th>Produto</th>
                <th>link</th>
                <th>Ações</th>
              </thead>
              <tbody>
                @foreach($itensLista as $item)
                <tr>
                  <td>{{ $item->produto->descricao }}</td>
                  <td><a target="_blank" href="{{ $item->link }}">{{ $item->link }}</a></td>
                  <td>
                    <button data-id="{{ $item->id }}" class="removeItem btn red darken-1" >
                      <i class="material-icons">delete</i>
                    </button>
                  </td>
                </tr>
                @endforeach
              </tbody>
            </table>
          </div>
        </div>
    </div>
      <script>
        $(document).ready(function () {
          var _token = '<?php echo csrf_token()  ?>';
          var idCasal = '{{ $casal->id }}';
          var idLista = '';
          <?php if(!empty($lista)) : ?>
              idLista = <?php echo $lista->id; ?>
          <?php endif; ?>

          $('select').material_select();

          if(idLista !== '') {
            $('.list-itens').removeClass('hide')
          }

          $("#voltar").on('click', function (e) {
            e.preventDefault();
            window.location = '/casais/'+idCasal+'/listas'
          })

          $('.remover-item-lista').on('click', function (e) {
            e.preventDefault();
            console.log('remove from list', this)
          })

          $("#salvarLista").on('click', function (e) {
            e.preventDefault();
            var url = '/casais/' + idCasal + '/listas/' + idLista
            $.post({
                url: url,
                data: {
                  _token: _token,
                  _method: idLista === '' ? 'POST' : 'PUT',
                  nome: $("#nome").val()
                },
                success: function (lista) {
                  window.location = '/casais/' + idCasal + '/listas/' + lista.id + '/edit';
                }
              })
          })

          $("#addItem").on('click', function (e) {
            e.preventDefault();
            
            $.post({
                url: '/casais/' + idCasal + '/listas/add-item',
                data: {
                  _token: _token,
                  listas_id: idLista,
                  produtos_id: $("#produto").val(),
                  link: $("#link").val()
                },
                success: function (item) {
                  window.location.reload();
                  // console.log(item, 'add item to list dynamically')
                }
              })
          })

          $(".removeItem").on('click', function (e) {
            e.preventDefault();
            var confirmado = confirm('Tem certeza que deseja excluir este item?')

            if (confirmado) {
              $.post({
                  url: '/casais/' + idCasal + '/listas/remove-item/' + $(this).data('id'),
                  data: {
                    _token: _token
                  },
                  success: function (item) {
                    window.location.reload();
                  }
                })
            }
          })
        })
      </script>
@endsection