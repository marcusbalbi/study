import MymtgCombo from 'components/combobox/MymtgCombo'
import { isObject } from 'lodash'
export default {
  props: {
    // using with v-model
    value: {},
    disable: {
      default: undefined
    },
    filter: {
      type: Object,
      default: function () {
        return { mode: undefined, query: undefined }
      }
    },
    defaultText: {
      type: String,
      default: 'Select'
    },
    defaultValue: {
      default: null
    },
    emptyDefaultValue: {
      default: 0
    },
    /**
    * Text to be shown when there is no data
    */
    emptyDefaultText: {
      default: 'Select'
    },
    watch: {
      default: null
    }
  },
  methods: {
    selectItem: function (item) {
      // using with v-service
      this.$emit('input', item)
    },
    format: function (data) {
      return data.map((item) => {
        return this.formatItem(item)
      })
    },
    formatItem: function (item) {
      return { value: item[this.valueName], text: item[this.textName] }
    },
    bootLoadData: function () {
      this.selectedItem = this.value || this.defaultValue
      let mode = this.filter.mode || this.defaultFilter.mode
      let query = this.filter.query || this.defaultFilter.query

      if (this.watch !== null) {
        this.applyWatch(mode, query)
      } else {
        this.loadData(mode, query)
      }
    },
    applyWatch: function (mode, query) {
      if (this.validateWatch()) {
        query = Object.assign(query, this.watch)
        this.loadData(mode, query)
      } else {
        this.data = []
      }
    },
    validateWatch: function () {
      let valid = false
      if (!isObject(this.watch)) {
        return valid
      }

      for (let prop in this.watch) {
        if (this.watch[prop] !== null) {
          valid = true
        }
      }
      return valid
    },
    loadData: function (mode, query) {
      this.service[mode]({
        filter: query,
        fields: this.fields
      }).then((res) => { this.loaded(res) }, (err) => { this.errorLoading(err) })
    },
    loaded: function (res) {
      this.data = this.format(res.data)
    },
    errorLoading: function (err) {
      console.log(err)
    }
  },
  components: {
    MymtgCombo
  },
  data: function () {
    return {
      mixinName: 'MymtgRemoteComboMixin',
      service: null,
      selectedItem: null,
      data: [],
      fields: null,
      defaultFilter: {
        mode: 'search',
        query: {}
      },
      defaultOption: {
        value: null,
        text: 'Select'
      },
      emptyDefaultOption: {
        value: null,
        text: 'Select'
      },
      valueName: 'id',
      textName: 'text'
    }
  },
  watch: {
    'watch': function (newVal) {
      this.bootLoadData()
    },
    'value': function (newValue) {
      this.selectedItem = newValue
    }
  },
  beforeMount: function () {
    if (!!this.service === false) {
      throw new Error(`to use ${this.mixinName} mixin you should provide a service`)
    }
    this.bootLoadData()
  },
  render: function (h) {
    return h(MymtgCombo, {
      props: {
        data: this.data,
        disable: this.disable,
        showDefaultOption: true,
        value: this.selectedItem,
        defaultText: this.defaultText || this.defaultOption.text,
        defaultValue: this.defaultValue || this.defaultOption.value || null,
        emptyDefaultText: this.emptyDefaultText || this.emptyDefaultOption.text,
        emptyDefaultValue: this.emptyDefaultValue || this.emptyDefaultOption.value
      },
      on: {
        select: this.selectItem
      }
    })
  }
}
