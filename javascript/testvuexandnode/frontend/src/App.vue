<template>
  <div id="app">
    <counter/>
    <increment-button />
    <decrement-button />
    <reset-button  />
  </div>
</template>

<script>
import Counter from '@/components/Counter'
import DecrementButton from '@/components/DecrementButton'
import IncrementButton from '@/components/IncrementButton'
import ResetButton from '@/components/ResetButton'
export default {
  name: 'app',
  components: {
    Counter,
    DecrementButton,
    IncrementButton,
    ResetButton
  },
  mounted () {
    this.$store.dispatch('initial')
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
},
.reset {
  margin-top: 35px;
}
</style>
