import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import getSong from '../queries/getSong'
class SongDetail extends Component {
  render () {
    console.log(this.props)
    this.props.query({
      variables: {
        id: this.props.params.id
      }
    }).then(() => {
      if (!this.props.data.loading) {
        return (
          <div>
            <h3>{this.props.data.song.title}</h3>
          </div>
        );
      }
    })
    return null
  }
}

export default graphql(getSong)(SongDetail)