import MyMtgService from 'src/common/http/MyMtgService'

class EditionService extends MyMtgService {

  defineResourceName () {
    return 'edition'
  }
}

export default EditionService
