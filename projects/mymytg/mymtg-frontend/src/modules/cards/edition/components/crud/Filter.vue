<template>
<div>  
  <form @submit.prevent="search">

    <mymtg-field label="Name">
      <input v-model="filterModel.name"
             class="form-control"
             placeholder="Name" autofocus />
    </mymtg-field>

    <mymtg-field label="Release Date">
      <input type="date"
             v-model="filterModel.release_date"
             class="form-control"/>
    </mymtg-field>

     <mymtg-field label="Initials">
      <input
             v-model="filterModel.initials"
             class="form-control"
             placeholder="Initials"/>
    </mymtg-field>

    <mymtg-field label="Cards Amount">
      <input
            type="number"
            v-model="filterModel.cards_amount"
            class="form-control"
            placeholder="Cards Amount"/>
    </mymtg-field>

    <mymtg-field label="Block">
      <mymtg-block-combo v-model="filterModel.block_id" ></mymtg-block-combo>
    </mymtg-field>
    <mymtg-filter-actions class="pull-right"
     @search="search" 
     @clean="clean">
    </mymtg-filter-actions>

  </form>
</div>
</template>

<script type="text/javascript">
  import MymtgBlockCombo from 'cards/block/components/combobox/MymtgBlockCombo'
  import MymtgField from 'components/form/MymtgField'
  import MymtgFilterActions from 'components/filter/MymtgFilterActions'
  import MymtgCombo from 'components/combobox/MymtgCombo'
  import EditionModel from 'cards/edition/models/EditionModel'
  export default {
    name: 'EditionFilter',
    data: function () {
      return {
        filterModel: new EditionModel()
      }
    },
    components: {
      MymtgField,
      MymtgFilterActions,
      MymtgBlockCombo,
      MymtgCombo
    },
    methods: {
      search: function () {
        this.$emit('search', this.filterModel)
      },
      selectBlock: function (blockId) {
        this.filterModel.block_id = blockId
      },
      clean: function () {
        this.filterModel.clean()
        this.$emit('clean', this.filterModel)
      }
    },
    created: function () {
    }
  }
</script>


<style type="text/css" scoped>
</style>
