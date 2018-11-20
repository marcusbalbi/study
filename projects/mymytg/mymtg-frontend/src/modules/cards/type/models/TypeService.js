import MyMtgService from 'src/common/http/MyMtgService'

class TypeService extends MyMtgService {

  defineResourceName () {
    return 'type'
  }

  permanents () {
    return this.search({
      filter: { permanent: 1 }
    })
  }

  nonPermanents () {
    return this.search({
      filter: { permanent: 0 }
    })
  }
}

export default TypeService
