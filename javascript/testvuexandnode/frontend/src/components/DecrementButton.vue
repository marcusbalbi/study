<template lang="html">
  <div class="decrement-button">
    <button :disabled="countIsLessThanZero" @click="decrement">DECREMENT ME</button>
  </div>
</template>

<script>
export default {
  name: 'DecrementButton',
  computed: {
    countIsLessThanZero () {
      return this.$store.state.count <= 0
    }
  },
  methods: {
    decrement () {
      this.$store.dispatch('decrement')
    }
  }
}
</script>

<style lang="css">
</style>
