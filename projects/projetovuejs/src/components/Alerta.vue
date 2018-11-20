<script>
export default {

  props: [
    'tipo',
    { name: 'mudar', type: Boolean, default: false }
  ],

  data () {
    return {
      exibir: true,
      olamundo: 'Ola meu mundo'
    }
  },

  methods: {

    fechar () {
      this.exibir = false
    }
  },

  filters: {
    mudatudo (value) {
      console.log(this.mudar)
      if (this.mudar) {
        return value + 'MUDA TUDO MESMO'
      } else {
        return value
      }
    }
  },

  computed: {
    tipos () {
      return [
        'componente-alerta',
        this.tipo === 'sucesso' ? 'componente-alerta-sucesso' : '',
        this.tipo === 'erro' ? 'componente-alerta-erro' : ''
      ]
    }

  }
}
</script>

<template>
  <div :class="tipos" v-show="exibir">
    <span>{{ olamundo | mudatudo }}</span>
		<slot></slot>
		<span class="componente-alerta-fechar" @click="fechar">X</span>
	</div>
</template>


<style>
	.componente-alerta {
	position: relative;
	margin: 20px;
	border: 1px solid #aaa;
	padding: 1em;
	background-color:#ccc
	}

	.componente-alerta-fechar {

	cursor: pointer;
	position: absolute;
	top: 1em;
	right: 1em;
	font-weight: bolder;	
	}

	.componente-alerta-sucesso {

	background-color: #00AA00;
	border: 1px solid #007700;

	}

	.componente-alerta-erro {

	background-color: #FF0000;
	border: 1px solid #AA0000;

	}
</style>