import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql} from 'react-apollo'
import { Link, hashHistory } from 'react-router'
import fetchSongs from '../queries/fetchSongs'
class SongCreate extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: ' '
    }
  }
  onSubmit (event) {
    event.preventDefault()
    this.props.mutate({
      variables: {
        title: this.state.title
      },
      refetchQueries: [{ query: fetchSongs } ]
    }).then(() => {
      hashHistory.push('/')
    })
  }
  render () {
    return (
     <div>
       <Link to="/" >back</Link>
       <h3>Create a new Song called "{this.state.title}"</h3>
       <form onSubmit={this.onSubmit.bind(this)}>
          <label>
            Song Title:
            <input 
            onChange={event => this.setState({ title: event.target.value })}
            value={this.state.title}
            />
          </label>
       </form>
     </div> 
    );
  }
}

const mutation = gql`
  mutation AddSong ($title : String) {
    addSong (title: $title) {
      id
      title
    }
  }
`

export default graphql(mutation)(SongCreate)