<template>
<div>
  <select :disabled="disableCombo"
          v-model="selectedItem"
          class="form-control mymtg-select">

    <option v-if="showDefaultOption" :value="optionDefaultValue">{{ optionDefaultText }}</option>

    <option v-for="entry in data" :value="entry.value"  >{{ entry.text }}</option>
  </select>
</div>
</template>


<script type="text/javascript">
export default {
  name: 'MymtgCombo',
  created: function () {
    // set the selectedItem when it comes with a value
    if (this.value) {
      this.selectedItem = this.value
    } else {
      this.selectedItem = this.defaultValue
    }
  },
  props: {
    value: {},
    disable: {
      default: undefined
    },
    /**
    * the Data to be render on the combobox
    */
    data: {
      type: Array,
      default: function () {
        return []
      }
    },
    /**
    * Default value to be used when there is no item selected
    */
    defaultValue: {
      default: null
    },
    /**
    * Default text to be shown when there is no item selected
    */
    defaultText: {
      default: 'Select'
    },
    /**
    * Value to be used when there is no data
    */
    emptyDefaultValue: {
      default: 0
    },
    /**
    * Text to be shown when there is no data
    */
    emptyDefaultText: {
      default: 'Select'
    },
    /**
    * if false will not show the "default option"
    */
    showDefaultOption: {
      default: true
    },
    /**
    * true means that the select will be disabled when it has no data, set false to prevent that
    */
    disableOnEmpty: {
      default: true
    }
  },
  data: function () {
    return {
      selectedItem: ''
    }
  },
  methods: {
    selectItem: function (e) {
      // using with v-model
      this.$emit('input', this.selectedItem)
      // // custom event
      this.$emit('select', this.selectedItem)
    }
  },
  computed: {
    disableCombo: function () {
      return this.disable !== undefined ? this.disable : this.disableOnEmpty && !this.hasData
    },
    hasData: function () {
      return this.data.length > 0
    },
    optionDefaultValue: function () {
      return this.hasData ? this.defaultValue : this.emptyDefaultValue
    },
    optionDefaultText: function () {
      return this.hasData ? this.defaultText : this.emptyDefaultText
    }
  },
  watch: {
    'value': function (newValue) {
      this.selectedItem = newValue
    },
    'selectedItem': function () {
      this.selectItem('over here')
    }
  }
}
</script>

<style type="text/css">

</style>
