import React, { Component } from 'react'

class SearchBar extends Component {
  state = { query: '' }

  render () {
    return (
      <form onSubmit={this.submit.bind(this)}>
        <label>
          Buscar Imagem:
        <input onChange={(ev) => { this.setState({ query: ev.target.value }) }}  />
        </label>
      </form>
    )
  }
  submit (ev) {
    ev.preventDefault()
    this.props.onSubmit(this.state.query)
  }
}

export default SearchBar
