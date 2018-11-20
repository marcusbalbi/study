import MyMtgService from 'src/common/http/MyMtgService'

class ColorService extends MyMtgService {

  defineResourceName () {
    return 'color'
  }
}

export default ColorService
