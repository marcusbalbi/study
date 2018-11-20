import MyMtgService from 'src/common/http/MyMtgService'

class ArtistService extends MyMtgService {

  defineResourceName () {
    return 'artist'
  }
}

export default ArtistService
