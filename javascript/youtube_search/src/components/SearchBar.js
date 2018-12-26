import React from 'react'

class SearchBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      term: props.term
    }
  }
  render () {
    return (
      <div className="search-bar">
        <input type="text" value={this.state.term} onChange={(e) => { this.search(e.target.value) }} />
      </div>
    )
  }
  search (term) {
    this.setState({term})
    this.props.onSearch(term)
  }
}

export default SearchBar
