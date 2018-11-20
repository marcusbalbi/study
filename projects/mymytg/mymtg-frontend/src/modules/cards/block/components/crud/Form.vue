<template>
<div>
  <form>
  <h1>{{ title }}</h1>
    <mymtg-field label="ID" v-if="updating">
      <input class="form-control input-sm" disabled="disabled" v-model="formModel.id"/>
    </mymtg-field>
    <mymtg-field label="Name">
      <input initial="off" class="form-control input-lg" v-model="formModel.name" placeholder="Name">
    </mymtg-field>
    <mymtg-action ref="action"></mymtg-action>
  </form>
</div>

</template>

<script>
import BlockService from 'cards/block/models/BlockService'
import MymtgField from 'components/form/MymtgField'
import MymtgAction from 'components/form/MymtgAction'
import FormMixin from 'components/crud/FormMixin'
export default {
  name: 'MymtgBlockForm',
  mixins: [
    FormMixin
  ],
  components: {
    MymtgField,
    MymtgAction
  },
  data: function () {
    return {
      formModel: {
        id: undefined,
        name: ''
      }
    }
  },

  computed: {
    title: function () {
      return this.updating ? `Updating Block - ${this.formModel.name}` : 'Create Block'
    }
  },
  methods: {
  },
  created: function () {
    this.model = new BlockService()
  }

}
</script>

<style></style>
