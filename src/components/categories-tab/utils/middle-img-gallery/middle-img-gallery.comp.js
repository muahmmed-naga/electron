import React from 'react'

// Components
import ImageGallery from 'react-image-gallery'

// Styles
import './middle-img-gallery.styles.scss'

const MiddleImgGallery = ({ data }) => {
  return (
    <div className="middle-image-gallery-wrapper">
      <ImageGallery
        items={data}
        showPlayButton={false}
        lazyLoad={true}
        autoPlay
        slideInterval={100000}
      />
    </div>
  )
}

export default MiddleImgGallery
