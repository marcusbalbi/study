import React from 'react'

const VideoDetail = (props) => {
  if (props.selected === null) {
    return <div>
      
    </div>
  }
  return (
    <div>
      <h3>{props.selected.title}</h3>
      <iframe title="aaa" width="853" height="480" src={props.selected.link} 
        frameBorder="0"
        allowFullScreen />
    </div>
  )
}

export default VideoDetail
