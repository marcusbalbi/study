import PaginationModel from 'src/common/components/list/pagination/Model'
import { toast } from 'src/common/components/notification/toast/Toast'
export default {
  mounted: function () {
    if (!!this.model === false) {
      throw new Error(`to use ${this.mixinName} mixin you should provide a model`)
    }
    this.addFilterListeners()
    this.addGridListeners()
    this.loadData()
  },
  data () {
    return {
      mixinName: 'MainPageMixin',
      items: [],
      paginationModel: new PaginationModel(),
      selectedRow: null,
      filter: {},
      model: false,
      per_page: 10,
      include: null,
      fields: null
    }
  },
  computed: {
    removedText: function () {
      return 'Item removed!'
    }
  },
  methods: {
    addFilterListeners: function () {
      if (!this.$refs.filter) {
        return
      }

      this.$refs.filter.$on('search', this.search)
      this.$refs.filter.$on('clean', this.search)
    },
    addGridListeners: function () {
      if (!this.$refs.grid) {
        return
      }

      this.$refs.grid.$on('selectedRow', this.selected)
      this.$refs.grid.$on('changePage', this.changePage)
    },
    search: function (filter) {
      this.filter = filter
      this.paginationModel.currentPage = 1
      this.selectedRow = null
      this.loadData()
    },
    changePage: function (page) {
      this.paginationModel.currentPage = page
      this.loadData()
    },
    selected: function (row) {
      this.selectedRow = row
    },
    loadData: function () {
      let page = this.paginationModel.currentPage
      this.model.search({ paginate: { per_page: this.per_page, page },
        filter: this.filter,
        fields: this.fields,
        include: this.include
      }).then((response) => {
        this.items = response.data.data
        this.paginationModel.update(response.data)
      })
    },
    remove: function () {
      this.model.delete(this.selectedRow.id).then(this.removed)
    },
    removed: function (response) {
      toast.success(this.removedText)
      this.selectedRow = null
      this.loadData()
    }
  }
}
