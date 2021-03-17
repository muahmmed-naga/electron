import React from 'react'

// Components
import { Link } from 'react-router-dom'

// Styles
import './left-side-tab-featured.styles.scss'

const LeftSideTabFeatured = () => {
  return (
    <div className="left-side-tab-featured">
      <Link to={`/categories/on-sale/product/1`} className="img-wrapper">
        <img
          src="https://cdn.shopify.com/s/files/1/0066/4322/0562/products/GamePad_1920x.jpg?v=1604559863"
          alt="tab-1"
        />
      </Link>

      <Link to={`/categories/on-sale/product/1`} className="product-name">
        <div>Playstation Accessories</div>
      </Link>

      <div className="text-muted">Electronics</div>

      <div className="price flex-align-center">
        <div className="new">$120.00</div>
        <del>$140.00</del>
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
    </div>
  )
}

export default LeftSideTabFeatured
