// Components
import { Link } from 'react-router-dom'
import LAPTOPS_PRODUCTS from '../../../../data/laptops_products'

const CategoriesTopRated = () => {
  const truncateStr = (str, max) => {
    if (str?.length > max) {
      return str.slice(0, max - 3) + '...'
    } else return str
  }

  return (
    <div className="tab-content">
      {LAPTOPS_PRODUCTS.map(({ id, name, imgUrl, price, category }) => (
        <div className="align-tiny-product-wrapper flex-align-center" key={id}>
          <Link to={`/categories/audios/product/${id}`} className="img-wrapper">
            <img src={imgUrl} alt="product" />
          </Link>

          <div className="content">
            <div className="category">{category}</div>
            <Link
              to={`/categories/audios/product/${id}}`}
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
      ))}
    </div>
  )
}

export default CategoriesTopRated
