<script type="text/javascript">
import BlockService from 'cards/block/models/BlockService'
import RemoteCombo from 'components/combobox/mixins/MymtgRemoteCombo'
export default {
  name: 'MymtgBlockCombo',
  mixins: [
    RemoteCombo
  ],
  created: function () {
    this.service = new BlockService()
  },
  data: function () {
    return {
      defaultOption: {
        text: 'Select a Block'
      },
      fields: ['id', 'name']
    }
  },
  methods: {
    formatItem: function (item) {
      return { value: item.id, text: item.name }
    }
  }
}
</script>