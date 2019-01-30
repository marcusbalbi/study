import React from 'react'

export default (props = {}) => {
  let result = Array.isArray(props.images) ? props.images : []
  let images = result.map((image) => {
    return <img key={image.id} alt={image.alt} src={image.urls.regular} />
  })
  return (
    <div>
      {images}
    </div>
  )
}
