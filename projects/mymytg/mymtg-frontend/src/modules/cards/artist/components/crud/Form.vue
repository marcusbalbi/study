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
import ArtistService from 'src/modules/cards/artist/models/ArtistService'
import MymtgField from 'src/common/components/form/MymtgField'
import MymtgAction from 'src/common/components/form/MymtgAction'
import FormMixin from 'components/crud/FormMixin'
export default {
  name: 'MymtgArtistForm',
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
      return this.updating ? `Updating Artist - ${this.formModel.name}` : 'Create Artist'
    }
  },
  methods: {
  },
  created: function () {
    this.model = new ArtistService()
  }

}
</script>

<style></style>
