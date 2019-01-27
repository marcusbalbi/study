import React, { Component } from 'react'

class Content extends Component {
  render () {
    return (
      <div>
        total found: {this.props.result.total || 0}
      </div>
    )
  }
}

export default Content