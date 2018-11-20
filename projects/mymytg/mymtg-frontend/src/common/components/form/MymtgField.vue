<template>
<div>
  <div :class="{ 'has-error' : !valid }" class="form-group">
    <label v-show="label"  class="control-label">{{ label }}:</label>
    <slot></slot>
     <span v-if="!valid" class="error help-block">
      <ul>
        <li v-for="errors in validator.errors">{{ errors.message }}</li>
      </ul>
     </span>
  </div>
</div>
</template>

<script type="text/javascript">
  export default {
    name: 'MymtgField',
    props: {
      label: {
        type: String,
        default: undefined
      },
      validator: {
        default: undefined
      }
    },
    data: function () {
      return {
        // placeholder: 'TESTO'
      }
    },
    computed: {
      valid: function () {
        if (this.validator === undefined) {
          return true
        }

        return this.validator && this.validator.valid
      },
      invalidMessage: function () {
        return typeof this.valid === 'string' ? this.valid : 'Invalid Field'
      }
    },
    ready: function () {
    }
  }
</script>