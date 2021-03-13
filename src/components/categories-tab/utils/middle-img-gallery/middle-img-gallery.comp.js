import React from 'react'

// Components
import ImageGallery from 'react-image-gallery'

// Styles
import './middle-img-gallery.styles.scss'

const defaultImages = [
  {
    original:
      'https://cdn.shopify.com/s/files/1/0066/4322/0562/products/Tablet_3929c9a4-1a61-4e52-91fb-8a07d394b56f_1366x.jpg?v=1604559863',
    thumbnail:
      'https://cdn.shopify.com/s/files/1/0066/4322/0562/products/Tablet_3929c9a4-1a61-4e52-91fb-8a07d394b56f_1366x.jpg?v=1604559863',
  },
  {
    original:
      'https://cdn.shopify.com/s/files/1/0066/4322/0562/products/Tablet_3929c9a4-1a61-4e52-91fb-8a07d394b56f_1366x.jpg?v=1604559863',
    thumbnail:
      'https://cdn.shopify.com/s/files/1/0066/4322/0562/products/Tablet_3929c9a4-1a61-4e52-91fb-8a07d394b56f_1366x.jpg?v=1604559863',
  },
  {
    original:
      'https://cdn.shopify.com/s/files/1/0066/4322/0562/products/Tablet_3929c9a4-1a61-4e52-91fb-8a07d394b56f_1366x.jpg?v=1604559863',
    thumbnail:
      'https://cdn.shopify.com/s/files/1/0066/4322/0562/products/Tablet_3929c9a4-1a61-4e52-91fb-8a07d394b56f_1366x.jpg?v=1604559863',
  },
]

const MiddleImgGallery = () => {
  return (
    <div className="middle-image-gallery-wrapper">
      <ImageGallery
        items={defaultImages}
        showPlayButton={false}
        lazyLoad={true}
        autoPlay
        slideInterval={100000}
      />
    </div>
  )
}

export default MiddleImgGallery
