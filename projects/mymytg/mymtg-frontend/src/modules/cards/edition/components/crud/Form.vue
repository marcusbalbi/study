<template>
<div>
  <form>
  <h1>{{ title }}</h1>
  <div class="col-md-6">
   <mymtg-field label="Name">
      <input v-model="formModel.name"
             class="form-control"
             placeholder="Name" autofocus="" />
    </mymtg-field>

    <mymtg-field label="Release Date">
      <input type="date"
             v-model="formModel.realese_date"
             class="form-control"/>
    </mymtg-field>
</div>
 <div class="col-md-6">
     <mymtg-field label="Initials">
      <input
             v-model="formModel.initials"
             class="form-control"
             placeholder="Initials"/>
    </mymtg-field>

    <mymtg-field label="Cards Amount">
      <input
            type="number"
            v-model="formModel.cards_amount"
            class="form-control"
            placeholder="Cards Amount"/>
    </mymtg-field>
</div>
    <div class="col-md-12">
    <mymtg-field label="Block">
      <mymtg-block-combo v-model="formModel.block_id"></mymtg-block-combo>
    </mymtg-field>
    <mymtg-action  ref="action"></mymtg-action>
    </div>
  </form>
</div>

</template>

<script>
import EditionService from 'cards/edition/models/EditionService'
import MymtgField from 'common/components/form/MymtgField'
import MymtgAction from 'common/components/form/MymtgAction'
import MymtgBlockCombo from 'cards/block/components/combobox/MymtgBlockCombo'
import FormMixin from 'components/crud/FormMixin'
import EditionModel from 'cards/edition/models/EditionModel'
export default {
  name: 'MymtgBlockForm',
  mixins: [
    FormMixin
  ],
  beforeCreate: function () {
    this.model = new EditionService()
  },
  components: {
    MymtgField,
    MymtgAction,
    MymtgBlockCombo
  },
  data: function () {
    return {
      formModel: new EditionModel()
    }
  },

  computed: {
    title: function () {
      return this.updating ? `Updating Edition - ${this.formModel.name}` : 'Create Edition'
    }
  },
  methods: {
  }

}
</script>

<style></style>
