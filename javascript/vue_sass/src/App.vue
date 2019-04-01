<style src="./assets/style/main.scss" lang="scss"></style>
<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <button class="btn">TASK</button>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
