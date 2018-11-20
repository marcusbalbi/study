<template>
  <div >
    <h1>Artists</h1>
      <artist-filter  ref="filter" class="col-md-2"></artist-filter>

  <mymtg-grid ref="grid" class="col-md-10" :data="items"
              :columns="columns"
              :pagination="paginationModel">

  <mymtg-crud-actions slot="actions"
                      :selectedItem="selectedRow"
                      @create="newArtist"
                      @update="editArtist"
                      @remove="remove">
  </mymtg-crud-actions>
</mymtg-grid>
  </div>
</template>

<script>
  import ArtistFilter from './Filter'
  import MymtgGrid from 'src/common/components/list/grid/MymtgGrid'
  import MymtgCrudActions from 'src/common/components/list/actions/MymtgCrudActions'
  import ArtistService from 'src/modules/cards/artist/models/ArtistService'
  import MainMixin from 'components/crud/MainMixin'
  export default {
    name: 'MymtgArtistMain',
    mixins: [
      MainMixin
    ],
    created: function () {
      this.model = new ArtistService()
    },
    components: {
      MymtgGrid,
      MymtgCrudActions,
      ArtistFilter
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
      },
      removedText: function () {
        return `the Artist ${this.selectedRow.name} was removed!`
      }
    },
    methods: {
      editArtist: function () {
        this.$router.push({ name: 'cards.artist.update', params: { id: this.selectedRow.id } })
      },
      newArtist: function () {
        this.$router.push({ name: 'cards.artist.create' })
      }
    }
  }
</script>

<style>
  
</style>