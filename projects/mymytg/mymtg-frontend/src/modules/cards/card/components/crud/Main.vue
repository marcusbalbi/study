<template>
  <div >
    <h1>Card</h1>
      <card-filter ref="filter" class="col-md-2"></card-filter>
  <mymtg-grid class="col-md-10" ref="grid" :data="items"
              :columns="columns">

  <mymtg-crud-actions ref="actions" slot="actions"
                      :selectedItem="selectedRow"
                      @create="create"
                      @update="edit"
                      @remove="remove">
  </mymtg-crud-actions>
</mymtg-grid>
  </div>
</template>


<script>
  import CardFilter from './Filter'
  import MymtgGrid from 'src/common/components/list/grid/MymtgGrid'
  import MymtgCrudActions from 'src/common/components/list/actions/MymtgCrudActions'
  import CardService from 'src/modules/cards/card/models/CardService'
  import MainMixin from 'components/crud/MainMixin'
  export default {
    name: 'MymtgEditionMain',
    mixins: [
      MainMixin
    ],
    created: function () {
      this.model = new CardService()
    },
    components: {
      MymtgGrid,
      MymtgCrudActions,
      CardFilter
    },
    data () {
      return {
        include: ['editions']
      }
    },
    computed: {
      columns: function () {
        return [
          { index: 'id', text: 'Id', id: true },
          { index: 'name', text: 'Name' },
          { index: 'colors', text: 'Colors' },
          { index: 'created_at', text: 'Creation date' },
          { index: 'updated_at', text: 'Last Updated' }
        ]
      }
    },
    methods: {
      edit: function () {
        this.$router.push({ name: 'cards.card.update', params: { id: this.selectedRow.id } })
      },
      create: function () {
        this.$router.push({ name: 'cards.card.create' })
      }
    }
  }
</script>

<style>
  
</style>