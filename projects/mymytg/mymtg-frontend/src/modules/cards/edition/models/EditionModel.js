import MyMtgModel from 'common/models/MyMtgModel'

class EditionModel extends MyMtgModel {

  constructor () {
    super()

    this.name = null
    this.release_date = null
    this.initials = null
    this.cards_amount = null
    this.block_id = null
  }

}

export default EditionModel
