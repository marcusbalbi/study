import MyMtgModel from 'common/models/MyMtgModel'

class CardModel extends MyMtgModel {

  constructor () {
    super()

    this.type_id = null
    this.color_id = null
    this.rarety_id = null
    this.block_id = null
    this.edition_id = null
  }

}

export default CardModel
