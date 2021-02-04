<template>
  <div class="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-12">
      <button class="btn bg-indigo-500 hover:bg-indigo-400 sm:col-span-2 lg:col-span-2" >Botão Simples</button>
      <button class="btn btn-primary sm:col-span-2 lg:col-span-2" >Botão Simples</button>
      <button class="btn btn-primary sm:col-span-4 lg:col-span-2" >Botão Simples</button>
      <button class="btn btn-primary sm:col-span-2 lg:col-span-2" >Botão Simples</button>
      <button class="btn btn-primary sm:col-span-2 lg:col-span-4" >Botão Simples</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>
<style>
.main-title {
}
</style>
