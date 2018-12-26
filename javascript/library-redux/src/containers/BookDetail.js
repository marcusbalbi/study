import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
// import { SelectBook } from '../actions/index'
class BookDetail extends Component {
  render() {
    return (
      <div>
        {this.props.activeBook ? this.props.activeBook.title : ''}
      </div>
    )
  }
}

const MapStateToProps = (state) => {
  return {
    activeBook: state.activeBook
  }
}

// const MapActionsToProps = (dispatch) => {
//   return bindActionCreators({ SelectBook }, dispatch)
// }

export default connect(MapStateToProps)(BookDetail)