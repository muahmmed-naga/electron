import React from 'react'

// Components

import { Link } from 'react-router-dom'
import { IoEyeOutline } from 'react-icons/io5'
import { IoMdHeartEmpty } from 'react-icons/io'
import MiddleImgGallery from './utils/middle-img-gallery/middle-img-gallery.comp'

const Audio = ({ data }) => {
  const { left, middle, right } = data

  return (
    <>
      <div className="left-side-wrapper content-item">
        {left.map(({ id, name, price, imgUrl, category }) => (
          <div key={id} className="tiny-product-wrapper">
            <div className="category">{category}</div>
            <Link
              to={`/categories/best-sellers/product/${id}`}
              className="product-name"
            >
              {name}
            </Link>
            <Link
              to={`/categories/best-sellers/product/${id}`}
              className="img-wrapper"
            >
              <img src={imgUrl} alt="product" />
            </Link>

            <div className="price">
              <div className="new">${price}</div>
              <del>$300.00</del>
            </div>

            <div className="options flex-align-center">
              <div className="view flex-align-center">
                <IoEyeOutline />
                <span>view</span>
              </div>
              <div className="wishlist flex-align-center">
                <IoMdHeartEmpty />
                <span>wishlist</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="middle-side-wrapper content-item">
        <MiddleImgGallery data={middle} />
      </div>

      <div className="right-side-wrapper content-item">
        {right.map(({ id, name, price, imgUrl, category }, idx) => (
          <div key={id} className="tiny-product-wrapper">
            <div className="category">{category}</div>
            <Link
              to={`/categories/best-sellers/product/${id}`}
              className="product-name"
            >
              {name}
            </Link>
            <Link
              to={`/categories/best-sellers/product/${id}`}
              className="img-wrapper"
            >
              <img src={imgUrl} alt="product" />
            </Link>

            <div className="price">
              <div className="new">${price}</div>
              <del>$300.00</del>
            </div>

            <div className="options flex-align-center">
              <div className="view flex-align-center">
                <IoEyeOutline />
                <span>view</span>
              </div>
              <div className="wishlist flex-align-center">
                <IoMdHeartEmpty />
                <span>wishlist</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Audio
