<template>
<div>
  <form @submit.prevent="search">

    <mymtg-field label="Name">
      <input @keyup.enter="search"
             v-model="filterModel.name"
             class="form-control"
             placeholder="Name" autofocus />
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
  export default {
    name: 'ArtistFilter',
    data: function () {
      return {
        filterModel: {
          name: ''
        }
      }
    },
    components: {
      MymtgField,
      MymtgFilterActions
    },
    methods: {
      search: function () {
        this.$emit('search', this.$data.filterModel)
      },
      clean: function () {
        this.$data.filterModel = {}
        this.$emit('clean', this.$data.filterModel)
      }
    }
  }
</script>


<style type="text/css" scoped>
</style>
