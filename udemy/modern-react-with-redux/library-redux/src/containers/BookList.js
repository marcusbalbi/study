import React, {Component} from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import { SelectBook } from '../actions/index'
class BookList extends Component {
  render () {
    return (
      <ul>
        {this.renderitems()}
      </ul>
    )
  }
  renderitems () {
    return this.props.books.map((item) => {
      return (
        <li
          onClick={() => { this.props.SelectBook(item) }}
        key={item.title}>
          {item.title}
        </li>
      )
    })
  }
}

const MapStateToProps = (state) => {
  return {
    books: state.books
  }
}

const MapActionsToProps = (dispatch) => {
  return bindActionCreators({ SelectBook }, dispatch)
}

export default connect(MapStateToProps, MapActionsToProps)(BookList)