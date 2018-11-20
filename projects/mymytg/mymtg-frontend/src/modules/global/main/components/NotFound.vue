<template>
<div class="notfound">
  <h1 class="notfound-title" >{{ title }}</h1>
  <br>
  <slot></slot>
  <button class="notfound-back-button btn btn-info" @click="routeToMain" >{{ buttonText }}</button>
</div>
</template>




<script type="text/javascript">
  export default {
    name: 'MymtgNotFound',
    created: function () {

    },
    props: {
      buttonText: {
        type: String,
        default: 'Back to Main'
      },
      title: {
        type: String,
        default: 'Sorry, the page you are trying to access do not exists'
      }
    },
    data: function () {
      return {
      }
    },
    methods: {
      routeToMain: function () {
        this.$router.push({ name: 'global.main' })
      }
    }
  }
</script>




<style type="text/css">

</style>