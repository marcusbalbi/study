<script type="text/javascript">
import MymtgRemoteCombo from 'src/common/components/combobox/mixins/MymtgRemoteCombo'
import TypeService from 'src/modules/cards/type/models/TypeService'
export default {
  name: 'MymtgTypeCombo',
  mixins: [
    MymtgRemoteCombo
  ],
  created: function () {
    this.service = new TypeService()
  },
  data: function () {
    return {
      defaultOption: {
        value: 0,
        text: 'Select a Type'
      },
      defaultFilter: {
        mode: 'search'
      },
      fields: ['id', 'name'],
      valueName: 'id',
      textName: 'name'
    }
  }
}
</script>