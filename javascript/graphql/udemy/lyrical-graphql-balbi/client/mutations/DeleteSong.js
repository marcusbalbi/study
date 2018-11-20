import gql from 'graphql-tag'

const mutation = gql`
  mutation DeleteSong($id: ID) {
    deleteSong(id: $id) {
      id
    }
}

`

export default mutation