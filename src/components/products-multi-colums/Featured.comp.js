// Components
import { Link } from 'react-router-dom'
import AUDIO_PRODUCTS from '../../data/audio_products'

const FeaturedColumn = ({ title }) => {
  const truncateStr = (str, max) => {
    if (str?.length > max) {
      return str.slice(0, max - 3) + '...'
    } else return str
  }

  return (
    <div className="product-colum-wrapper">
      <div className="title p-bottom-10">
        <span className="p-bottom-10">{title}</span>
      </div>
      {AUDIO_PRODUCTS.slice(0, 3).map(
        ({ id, name, price, imgUrl, category }) => (
          <div
            key={id}
            className="align-tiny-product-wrapper flex-align-center"
          >
            <Link to={`/categories/featured/product/1`} className="img-wrapper">
              <img src={imgUrl} alt="product" />
            </Link>

            <div className="content">
              <div className="category">{category}</div>
              <Link
                to={`/categories/featured/product/1`}
                className="product-name"
              >
                {truncateStr(name, 15)}
              </Link>
              <div className="price">
                <div className="new">${price}</div>
                <del>$250.00</del>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  )
}

export default FeaturedColumn
