 <template>
        <h3>Minhas Tarefas:</h3>
        <ul clas="list-group">
            <li class="list-group-item" v-for="tarefa in lista">
                <span>@{{ tarefa.titulo }}</span>
            </li>
        </ul>
      </template>

<script>
export default {

  data () {
    return {
      lista: []
    }
  },

  created () {
    this.carregarListaTarefas()
  },

  ready () {
    console.log('componente tarefas pronto	')
  },

  methods: {

    carregarListaTarefas () {
    // this.$http.get('api/tarefas').then(function(response){
			// 	this.lista = response.json();
			// });

      let resource = this.$resource('api/tarefas/{id}')

      resource.get().then(function (response) {
        this.lista = response.json()
      })
    }
  }
}
</script>