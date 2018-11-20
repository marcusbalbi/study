<template lang="html">
  <div class="increment-button">
    <button @click="increment">INCREMENT ME</button>
  </div>
</template>

<script>
export default {
  name: 'DecrementButton',
  computed: {
  },
  methods: {
    increment () {
      this.$store.dispatch('increment')
    }
  }
}
</script>

<style lang="css">
</style>
