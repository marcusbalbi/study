import React from 'react'

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
        <li onClick={() => { this.selectVideo(item) }} key={item.id} >
          <img src={item.thumbnails.default.url} alt="IMAGEM AQUI"  />
          <span>{item.title}</span>
        </li>)
    })
  }
  selectVideo (item) {
    this.props.onVideoSelected(item)
  }
}

export default VideoList
