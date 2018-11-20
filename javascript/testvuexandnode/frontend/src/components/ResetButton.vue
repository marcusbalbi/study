<template lang="html">
  <div class="reset-button">
    <button :disabled="isZero" @click="reset" class="reset-button-button">RESET</button>
  </div>
</template>

<script>
export default {
  name: 'ResetButton',
  computed: {
    isZero () {
      return this.$store.state.count === 0
    }
  },
  methods: {
    reset () {
      this.$store.commit('reset')
    }
  }
}
</script>

<style lang="css">
.reset-button-button {
  background-color: RED;
  color: white;
  width: 150px;
  height: 150px;
}
.reset-button-button:disabled {
  background-color: #CCC;
  color: white;
  width: 150px;
  height: 150px;
}
</style>
