<template>
  <label for="campoCep">Cep:</label>
  <input id="campoCep" v-model="campoCep"  @keyup.enter="efetuarBuscaCep" />
  <button @click="efetuarBuscaCep" >Buscar Cep</button> 

</template>



<script type="text/javascript">
  export default {

    data () {
      return {
        campoCep: ''
      }
    },

    methods: {
      efetuarBuscaCep: function () {
        this.$dispatch('encontrado', {
          rua: 'Feliciano Braz',
          cidade: 'Nova Friburgo',
          estado: 'Rio de Janeiro'
        })
        this.campoCep = ''
      }
    }
  }
</script>


<style type="text/css">
  
</style>