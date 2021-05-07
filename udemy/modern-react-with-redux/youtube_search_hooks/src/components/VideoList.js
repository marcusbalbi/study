import React from 'react'
import VideoItem from './VideoItem'

class VideoList extends React.Component {
  render () {
    return (
      <ul className="video-list">
        {this.renderVideos()}   
      </ul>
    )
  }
  renderVideos () {
    return this.props.list.map((item) => {
      return (
        <VideoItem key={item.id} onClick={() => { this.selectVideo(item) }} video={item} />)
    })
  }
  selectVideo (item) {
    this.props.onVideoSelected(item)
  }
}

export default VideoList
