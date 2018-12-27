import React from 'react'


const Loading = (props) => {
  return (
    <div class="ui active dimmer">
      <div class="ui text loader">{props.children || 'Loading'}</div>
    </div>
  )
}

export default Loading