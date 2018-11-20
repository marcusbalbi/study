<script type="text/javascript">
import ColorService from 'cards/color/models/ColorService'
import RemoteComboMixin from 'components/combobox/mixins/MymtgRemoteCombo'
export default {
  name: 'MymtgColorCombo',
  mixins: [
    RemoteComboMixin
  ],
  created: function () {
    this.service = new ColorService()
  },
  data: function () {
    return {
      defaultOption: {
        text: 'Select a Color',
        option: 0
      },
      fields: ['id', 'name'],
      valueName: 'id',
      textName: 'name'
    }
  }
}
</script>