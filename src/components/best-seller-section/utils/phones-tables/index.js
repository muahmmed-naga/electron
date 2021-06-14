import React from 'react'

// Components
import { Link } from 'react-router-dom'
import CAMERAS_PRODUCTS from '../../../../data/cameras_products'

const CategoriesFeatured = () => {
  const truncateStr = (str, max) => {
    if (str?.length > max) {
      return str.slice(0, max - 3) + '...'
    } else return str
  }

  return (
    <div className="tab-content">
      {CAMERAS_PRODUCTS.map(({ id, name, imgUrl, price, category }) => (
        <div className="align-tiny-product-wrapper flex-align-center" key={id}>
          <Link to={`/categories/audios/product/1`} className="img-wrapper">
            <img src={imgUrl} alt="product" />
          </Link>

          <div className="content">
            <div className="category">{category}</div>
            <Link to={`/categories/audios/product/1}`} className="product-name">
              {truncateStr(name, 15)}
            </Link>
            <div className="price">
              <div className="new">${price}</div>
              <del>$250.00</del>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CategoriesFeatured
