import './ImageList.css'
import React from 'react'
import ImageCard from './ImageCard'

export default (props = {}) => {
  let result = Array.isArray(props.images) ? props.images : []
  let images = result.map((image) => {
    return <ImageCard key={image.id} image={image} />
  })
  return (
    <div className="image-list" >
      {images}
    </div>
  )
}
