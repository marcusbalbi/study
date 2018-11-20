<template>
  <div>
    <h1>Edition</h1>
      <edition-filter ref="filter" class="col-md-2"></edition-filter>
  <mymtg-grid ref="grid" class="col-md-10" :data="items"
              :columns="columns"
              :pagination="paginationModel">

    <mymtg-crud-actions slot="actions"
                        :selectedItem="selectedRow"
                        @create="create"
                        @update="edit"
                        @remove="remove">
    </mymtg-crud-actions>
</mymtg-grid>
  </div>

</template>

<script>
  import EditionFilter from './Filter'
  import MymtgGrid from 'src/common/components/list/grid/MymtgGrid'
  import MymtgCrudActions from 'src/common/components/list/actions/MymtgCrudActions'
  import EditionService from 'src/modules/cards/edition/models/EditionService'
  import MainMixin from 'components/crud/MainMixin'
  export default {
    name: 'MymtgEditionMain',
    mixins: [
      MainMixin
    ],
    created: function () {
      this.model = new EditionService()
    },
    components: {
      MymtgGrid,
      MymtgCrudActions,
      EditionFilter
    },
    data () {
      return {
        include: ['block']
      }
    },
    computed: {
      columns: function () {
        return [
          { index: 'id', text: 'Id', id: true },
          { index: 'name', text: 'Name' },
          { index: 'realese_date', text: 'Release Date' },
          { index: 'initials', text: 'Initials' },
          { index: 'cards_amount', text: 'Amount of Cards' },
          { index: 'block.name', text: 'Block' },
          { index: 'created_at', text: 'Creation date' },
          { index: 'updated_at', text: 'Last Updated' }
        ]
      }
    },
    methods: {
      edit: function () {
        this.$router.push({ name: 'cards.edition.update', params: { id: this.selectedRow.id } })
      },
      create: function () {
        this.$router.push({ name: 'cards.edition.create' })
      }
    }
  }
</script>

<style>
  
</style>