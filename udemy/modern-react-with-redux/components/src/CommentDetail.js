import React, {Component} from 'react'
export default class CommentDetail extends Component {
  render () {
    return  (
      <div className="comment" >
        <a className="avatar" href="/">
          <img alt="avatar" src={this.props.avatar} />
        </a>
        <div className="content">
          <a className="author" href="/">
            {this.props.author}
          </a>
          <div className="metadata" >
            <span className="date" >{this.props.timeAgo}</span>
          </div>
          <div className="text" >{this.props.content}</div>
        </div>
      </div>
    )
  }
}
