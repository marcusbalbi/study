<script type="text/javascript">
import RaretyService from 'cards/rarety/models/RaretyService'
import RemoteComboMixin from 'components/combobox/mixins/MymtgRemoteCombo'
export default {
  name: 'MymtgRaretyCombo',
  mixins: [
    RemoteComboMixin
  ],
  created: function () {
    this.service = new RaretyService()
  },
  data: function () {
    return {
      defaultOption: {
        value: 0,
        text: 'Select a Rarety'
      },
      fields: ['id', 'name'],
      valueName: 'id',
      textName: 'name'
    }
  }
}
</script>