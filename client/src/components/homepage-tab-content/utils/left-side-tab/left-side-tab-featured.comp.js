import React from 'react'

// Components
import { Link } from 'react-router-dom'

// Styles
import './left-side-tab-featured.styles.scss'

const LeftSideTabFeatured = ({ data }) => {
  const { name, imgUrl, price, category } = data

  return (
    <div className="left-side-tab-featured">
      <Link to={`/categories/on-sale/product/1`} className="img-wrapper">
        <img src={imgUrl} alt="tab-1" />
      </Link>

      <Link to={`/categories/on-sale/product/1`} className="product-name">
        <div>{name}</div>
      </Link>

      <div className="text-muted">{category}</div>

      <div className="price flex-align-center">
        <div className="new">${price}</div>
        <del>$300.00</del>
      </div>

      <div className="on-stock">
        <div className="head">
          <span>
            Already Sold: <b>6</b>
          </span>
          <span>
            Available: <b>26</b>
          </span>
        </div>

        <div className="progress">
          <div className="solded" />
        </div>
      </div>

      <div className="special-offer">special offer</div>
      {/* {isSave && (
                <div className="discound-offer">
                  save <b>{isSave.percent}%</b>
                </div>
              )} */}
    </div>
  )
}

export default LeftSideTabFeatured
