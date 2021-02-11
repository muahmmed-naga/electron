import React, { useState, useEffect } from 'react'
import axios from 'axios'

// Components
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import { IoEyeOutline } from 'react-icons/io5'
import { IoMdHeartEmpty } from 'react-icons/io'
import LoadingSpinner from '../../../loading-spinner/loading-spinner.comp'

const CategoiresPageMainContent = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [products, setProducts] = useState([])

  const fetchProducts = async () => {
    const products = await axios.get('/api/v1/products')
    setProducts(products.data.data.products)
  }

  // Get All products
  useEffect(() => {
    setIsLoading(true)
    fetchProducts()
    setTimeout(() => setIsLoading(false), 300)
  }, [setProducts])

  return (
    <div className="categories-main-content-wrapper m-top-30">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <Row className="Hello">
          {products.map(({ id, name, price, image, category }, idx) => (
            <Col xs={12} sm={6} md={6} lg={3} key={idx}>
              <div className="tiny-product-wrapper">
                <div className="category">{category}</div>
                <Link to={`/products/product/${id}`} className="product-name">
                  {name}
                </Link>
                <Link to={`/products/product/${id}`} className="img-wrapper">
                  <img src={image} alt="product" />
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
            </Col>
          ))}
        </Row>
      )}
    </div>
  )
}

export default CategoiresPageMainContent
