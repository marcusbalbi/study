import MyMtgService from 'src/common/http/MyMtgService'

class RaretyService extends MyMtgService {

  defineResourceName () {
    return 'rarety'
  }
}

export default RaretyService
