<template>
<div>  
  <form @submit.prevent="search">

    <mymtg-field label="Name">
      <input v-model="filterModel.name"
             class="form-control"
             placeholder="Name" autofocus />
    </mymtg-field>

    <mymtg-field label="Type">
      <mymtg-type-combo default-text="All Types" v-model="filterModel.type_id"></mymtg-type-combo>
    </mymtg-field>

     <mymtg-field label="Colors">
         <mymtg-color-combo default-text="All Colors" v-model="filterModel.color_id"></mymtg-color-combo>
    </mymtg-field>

    <mymtg-field label="Rarety">
      <mymtg-rarety-combo default-text="All Rareties" v-model="filterModel.rarety_id"></mymtg-rarety-combo>
    </mymtg-field>

    <mymtg-field label="Block">
      <mymtg-block-combo default-text="All Blocks" v-model="filterModel.block_id"></mymtg-block-combo>
    </mymtg-field>

    <mymtg-field label="Edition">
      <mymtg-edition-combo :watch="{block_id: filterModel.block_id}"
                            default-text="All Editions"
                            empty-default-text="Select a Block first"
                            v-model="filterModel.edition_id">
                              
     </mymtg-edition-combo>
    </mymtg-field>

    <mymtg-filter-actions class="pull-right"
     @search="search" 
     @clean="clean">
    </mymtg-filter-actions>

  </form>
</div>
</template>

<script type="text/javascript">
  import MymtgField from 'components/form/MymtgField'
  import MymtgFilterActions from 'components/filter/MymtgFilterActions'
  import MymtgTypeCombo from 'cards/type/components/combobox/MymtgTypeCombo'
  import MymtgColorCombo from 'cards/color/components/combobox/MymtgColorCombo'
  import MymtgRaretyCombo from 'cards/rarety/components/combobox/MymtgRaretyCombo'
  import MymtgBlockCombo from 'cards/block/components/combobox/MymtgBlockCombo'
  import MymtgEditionCombo from 'cards/edition/components/combobox/MymtgEditionCombo'
  import CardModel from 'cards/card/models/CardModel'
  export default {
    name: 'CardFilter',
    data: function () {
      return {
        filterModel: new CardModel()
      }
    },
    components: {
      MymtgField,
      MymtgFilterActions,
      MymtgTypeCombo,
      MymtgColorCombo,
      MymtgRaretyCombo,
      MymtgBlockCombo,
      MymtgEditionCombo
    },
    methods: {
      search: function () {
        this.$emit('search', this.filterModel)
      },
      clean: function () {
        this.filterModel.clean()
        // this.$emit('clean', this.filterModel)
      }
    },
    created: function () {
    }
  }
</script>


<style type="text/css" scoped>
</style>
