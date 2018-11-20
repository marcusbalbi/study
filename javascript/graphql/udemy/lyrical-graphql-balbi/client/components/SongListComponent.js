import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { Link, hashHistory } from 'react-router'
import fetchSongs from '../queries/fetchSongs'
import deleteSong from '../mutations/DeleteSong'
class SongListComponent extends Component {
  renderSongs () {
    if (!this.props.data.loading) {
      return this.props.data.songs.map(({ title, id }) => {
        return (
          <li onClick={() => { this.goToSongDetail(id)}} key={ id } className="collection-item">{ title }
            <i onClick={() => { this.removeSong(id) }} className="material-icons" >delete</i>
          </li>
        )
      })
    }
    return null
  }
  goToSongDetail () {
    // hashHistory.push('/songs/' + id)
  }
  removeSong (id) {
    this.props.mutate({
      variables: {
        id
      }
    }).then(() => this.props.data.refetch())
  }
  render () {
    return (
      <div>
      <ul className="collection">
        {this.renderSongs()}
      </ul>
      <Link className="btn-floating btn-large right red" to="/songs/new" >
        <i className="material-icons" >add</i>
      </Link>
      </div>
    );
  }
}

export default graphql(deleteSong)(
  graphql(fetchSongs)(SongListComponent))