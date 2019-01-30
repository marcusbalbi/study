import React, { Component } from 'react'
import ImageList from './ImageList'
class Content extends Component {
  render () {
    return (
      <div>
        <ImageList images={this.props.result.results}  />
        total found: {this.props.result.total || 0}
      </div>
    )
  }
}

export default Content