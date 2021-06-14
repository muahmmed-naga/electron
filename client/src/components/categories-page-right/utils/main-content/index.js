// Components
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import { IoEyeOutline } from 'react-icons/io5'
import { IoMdHeartEmpty } from 'react-icons/io'
import VIDEOS_PRODUCTS from '../../../../data/videos_products'

const CategoiresPageMainContent = () => {
  return (
    <div className="categories-main-content-wrapper m-top-30">
      <Row className="Hello">
        {VIDEOS_PRODUCTS.map(({ id, name, imgUrl, price, category }) => (
          <Col key={id} xs={12} sm={6} md={6} lg={3}>
            <div className="tiny-product-wrapper">
              <div className="category">{category}</div>
              <Link to={`/products/product/${id}`} className="product-name">
                {name}
              </Link>
              <Link to={`/products/product/${id}`} className="img-wrapper">
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
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default CategoiresPageMainContent
