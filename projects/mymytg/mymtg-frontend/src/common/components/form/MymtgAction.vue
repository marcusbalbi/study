<template>
  <div class="form-actions form-group">
    <button type="submit" class="submit btn btn-default btn-success" @click.prevent="submitClicked">{{ submitText }}</button>
    <button v-if="showReset" class="reset btn btn-default btn-warning" @click.prevent="resetClicked">{{ resetText }}</button>
    <button v-if="showBack" class="back btn btn-default btn-danger" @click.prevent="backClicked">{{ backText }}</button>
    <slot></slot>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'MymtgAction',
    props: {
      submitText: {
        type: String,
        default: 'Submit'
      },
      backText: {
        type: String,
        default: 'Get back'
      },
      resetText: {
        type: String,
        default: 'Reset'
      },
      reset: {
        type: String,
        default: 'off'
      },
      back: {
        type: String,
        default: 'on'
      }
    },
    data: function () {
      return {
      }
    },
    computed: {
      showReset: function () {
        return this.reset === 'on' || false
      },
      showBack: function () {
        return this.back === 'on' || false
      }
    },
    methods: {
      submitClicked: function () {
        this.$emit('submit')
      },
      backClicked: function () {
        this.$emit('back')
      },
      resetClicked: function () {
        this.$emit('reset')
      }
    },
    created: function () {
    }
  }
</script>
