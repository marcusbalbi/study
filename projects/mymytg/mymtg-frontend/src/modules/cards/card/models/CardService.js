import MyMtgService from 'src/common/http/MyMtgService'

class CardService extends MyMtgService {

  defineResourceName () {
    return 'card'
  }
}

export default CardService
