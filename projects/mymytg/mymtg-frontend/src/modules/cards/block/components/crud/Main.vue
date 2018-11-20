<template>
  <div >
    <h1>Block</h1>
      <block-filter ref="filter"  class="col-md-2"></block-filter>
  <mymtg-grid ref="grid" class="col-md-10" :data="items"
              :columns="columns"
              :pagination="paginationModel">

  <mymtg-crud-actions slot="actions"
                      :selectedItem="selectedRow"
                      @create="newBlock"
                      @update="editBlock"
                      @remove="remove">
  </mymtg-crud-actions>
</mymtg-grid>
  </div>
</template>

<script>
  import BlockFilter from './Filter'
  import MymtgGrid from 'src/common/components/list/grid/MymtgGrid'
  import MymtgCrudActions from 'src/common/components/list/actions/MymtgCrudActions'
  import BlockModel from 'src/modules/cards/block/models/BlockService'
  import MainMixin from 'components/crud/MainMixin'
  export default {
    name: 'MymtgBlockMain',
    mixins: [
      MainMixin
    ],
    created: function () {
      this.model = new BlockModel()
    },
    components: {
      MymtgGrid,
      MymtgCrudActions,
      BlockFilter
    },
    data () {
      return {
      }
    },
    computed: {
      columns: function () {
        return [
          { index: 'id', text: 'Id', id: true },
          { index: 'name', text: 'Name' },
          { index: 'created_at', text: 'Creation date' },
          { index: 'updated_at', text: 'Last Updated' }
        ]
      }
    },
    methods: {
      editBlock: function () {
        this.$router.push({ name: 'cards.block.update', params: { id: this.selectedRow.id } })
      },
      newBlock: function () {
        this.$router.push({ name: 'cards.block.create' })
      }
    }
  }
</script>

<style>
  
</style>