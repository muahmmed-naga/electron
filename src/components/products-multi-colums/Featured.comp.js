// Components
import { Link } from 'react-router-dom'

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
      <div className="align-tiny-product-wrapper flex-align-center">
        <Link to={`/categories/featured/product/1`} className="img-wrapper">
          <img
            src="https://cdn.shopify.com/s/files/1/0066/4322/0562/products/GoldPhone_bd50e26e-6236-4648-88db-d0b8a94a1bde_540x.jpg?v=1605600708"
            alt="product"
          />
        </Link>

        <div className="content">
          <div className="category">category</div>
          <Link to={`/categories/featured/product/1`} className="product-name">
            {truncateStr('Product Name', 15)}
          </Link>
          <div className="price">
            <div className="new">$100.00</div>
            <del>$250.00</del>
          </div>
        </div>
      </div>
      <div className="align-tiny-product-wrapper flex-align-center">
        <Link to={`/categories/featured/product/1`} className="img-wrapper">
          <img
            src="https://cdn.shopify.com/s/files/1/0066/4322/0562/products/GoldPhone_bd50e26e-6236-4648-88db-d0b8a94a1bde_540x.jpg?v=1605600708"
            alt="product"
          />
        </Link>

        <div className="content">
          <div className="category">category</div>
          <Link to={`/categories/featured/product/1`} className="product-name">
            {truncateStr('Product Name', 15)}
          </Link>
          <div className="price">
            <div className="new">$100.00</div>
            <del>$250.00</del>
          </div>
        </div>
      </div>
      <div className="align-tiny-product-wrapper flex-align-center">
        <Link to={`/categories/featured/product/1`} className="img-wrapper">
          <img
            src="https://cdn.shopify.com/s/files/1/0066/4322/0562/products/GoldPhone_bd50e26e-6236-4648-88db-d0b8a94a1bde_540x.jpg?v=1605600708"
            alt="product"
          />
        </Link>

        <div className="content">
          <div className="category">category</div>
          <Link to={`/categories/featured/product/1`} className="product-name">
            {truncateStr('Product Name', 15)}
          </Link>
          <div className="price">
            <div className="new">$100.00</div>
            <del>$250.00</del>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedColumn
