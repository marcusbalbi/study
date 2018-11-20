<template lang="html">
  <div class="counter">
    <h1>I AM the Display Counter</h1>
    <h2 :class="this.counterClass">{{ count }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Counter',
  computed: {
    count () {
      return this.$store.state.count
    },
    counterClass () {
      if (this.count === 0) {
        return 'counter-count-zero'
      }
      if (this.count > 0 && this.count <= 5) {
        return 'counter-count-one-to-five'
      }
      if (this.count > 5 && this.count <= 9) {
        return 'counter-count-six-to-nine'
      }
      if (this.count >= 10) {
        return 'counter-count-ten'
      }
    }
  }
}
</script>

<style lang="css">
  .counter-count-zero {
    color: #CCC
  }
  .counter-count-one-to-five {
    color: #A00
  }
  .counter-count-six-to-nine {
    color: #070
  }
  .counter-count-ten {
    color: #009
  }
</style>
