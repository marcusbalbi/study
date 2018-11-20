<script type="text/javascript">
import EditionService from 'cards/edition/models/EditionService'
import RemoteComboMixin from 'components/combobox/mixins/MymtgRemoteCombo'
export default {
  name: 'MymtgColorCombo',
  mixins: [
    RemoteComboMixin
  ],
  created: function () {
    this.service = new EditionService()
  },
  data: function () {
    return {
      defaultOption: {
        text: 'Select a Edition',
        option: 0
      },
      fields: ['id', 'name'],
      valueName: 'id',
      textName: 'name'
    }
  }
}
</script>