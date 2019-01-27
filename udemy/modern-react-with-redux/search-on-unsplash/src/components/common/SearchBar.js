import React, { Component } from 'react'
import './SearchBar.scss'
class SearchBar extends Component {
  state = { query: '' }

  render () {
    return (
      <form className="search-bar-component" onSubmit={this.submit.bind(this)}>
        <label>
          <span>Buscar Imagem:</span>
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
