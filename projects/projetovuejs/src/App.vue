<template>
  <div id="app">
    <img class="logo" src="./assets/logo.png">
   
    <hello></hello>
    <p>
      Welcome to your Vue.js app!
    </p>
    <p>
      To get a better understanding of how this boilerplate works, check out
      <a href="http://vuejs-templates.github.io/webpack" target="_blank">its documentation</a>.
      It is also recommended to go through the docs for
      <a href="http://webpack.github.io/" target="_blank">Webpack</a> and
      <a href="http://vuejs.github.io/vue-loader/" target="_blank">vue-loader</a>.
      If you have any issues with the setup, please file an issue at this boilerplate's
      <a href="https://github.com/vuejs-templates/webpack" target="_blank">repository</a>.
    </p>
    <p>
      You may also want to checkout
      <a href="https://github.com/vuejs/vue-router/" target="_blank">vue-router</a> for routing and
      <a href="https://github.com/vuejs/vuex/" target="_blank">vuex</a> for state management.
    </p>
     <alerta tipo="erro" >BEM VINDO AO VUEJS</alerta>
     <alerta tipo="sucesso" >BEM VINDO AO VUEJS</alerta>
     <alerta :mudar="true">BEM VINDO AO VUEJS</alerta>
     <ul>
       <li v-for="pessoa in pessoas | cargo 'admin' | orderBy 'nome' -1 ">{{ pessoa.nome }}</li>
     </ul>
     <form v-validator>
       <input placeholder="telefone"  v-mascara valor="(00)0000-00000"/>
       <input placeholder="data" v-model="dataNascimento" v-mascara valor="00/00/0000"/>
       <input placeholder="Cpf" v-model="idade" v-mascara valor="000.000.000-00" />
       <button @click.prevent="cadastrar">Cadastrar</button>
     </form>
    <!--  <pre>
     {{ $data | json }}
     </pre> -->
     <busca-cep v-on:encontrado="preencherEndereco"></busca-cep>
  </div>
</template>

<script>
import Hello from './components/Hello'
import Alerta from './components/Alerta'
import BuscaCep from './components/BuscaCep'
import Validator from './directives/Validator'
import Mascara from './directives/Mascara'

export default {

  data () {
    return {
      telefone: '',
      dataNascimento: '',
      idade: 0,
      pessoas: [
        { nome: 'Joao Santos', cargo: 'admin' },
        { nome: 'Paulo Santos', cargo: 'admin' },
        { nome: 'Ricardo Santos', cargo: 'estudante' },
        { nome: 'Tito Santos', cargo: 'estudante' }
      ]
    }
  },

  methods: {
    preencherEndereco: function (endereco) {
      console.log(endereco)
    },
    cadastrar: function () {
      debugger
      console.log(this.data)
    }
  },

  // events: {
  //   'cep_encontrado': function (endereco) {
  //     console.log('Compoentne app encontrou o endereco', endereco)
  //   }
  // },

  components: {
    Hello,
    Alerta,
    BuscaCep
  },

  directives: [
    Validator,
    Mascara
  ]
}
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
