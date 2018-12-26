import React from 'react'

class VideoList extends React.Component {
  render () {
    return (
      <ul>
        {this.renderVideos()}   
      </ul>
    )
  }
  renderVideos () {
    return this.props.list.map((item) => {
      return (
        <li key={item.id} >
          <img src={item.thumbnails.default.url} alt="IMAGEM AQUI"  />
          <span>{item.title}</span>
        </li>)
    })
  }
}

export default VideoList
