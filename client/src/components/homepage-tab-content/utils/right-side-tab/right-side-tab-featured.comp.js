import React, { useState, useEffect } from 'react'
import axios from 'axios'

// Styles
import './right-side-tab-featured.styles.scss'
import { Link } from 'react-router-dom'
import { IoEyeOutline } from 'react-icons/io5'
import { IoMdHeartEmpty } from 'react-icons/io'
import LoadingSpinner from '../../../loading-spinner/loading-spinner.comp'

const RightSideTabFeatured = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState([])

  useEffect(() => {
    setIsLoading(true)
    axios
      .get('/api/v1/categories/featured')
      .then((res) => setData(res.data.data.featured))
    setTimeout(() => setIsLoading(false), 300)
  }, [])

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="righ-side-tab-featured">
          {data.map(({ id, img, name, price, category }) => (
            <div className="tiny-product-wrapper" key={id}>
              <div className="category">{category}</div>
              <Link
                to={`/categories/featured/product/${id}`}
                className="product-name"
              >
                {name}
              </Link>
              <Link
                to={`/categories/featured/product/${id}`}
                className="img-wrapper"
              >
                <img src={img} alt="product" />
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
      )}
    </>
  )
}

export default RightSideTabFeatured
