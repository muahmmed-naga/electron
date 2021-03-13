import React from 'react'

// Components
import { Link } from 'react-router-dom'

const CategoriesFeatured = () => {
  const truncateStr = (str, max) => {
    if (str?.length > max) {
      return str.slice(0, max - 3) + '...'
    } else return str
  }

  return (
    <div className="tab-content">
      <div className="align-tiny-product-wrapper flex-align-center">
        <Link to={`/categories/audios/product/1`} className="img-wrapper">
          <img
            src="https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/GamePad-300x300.jpg"
            alt="product"
          />
        </Link>

        <div className="content">
          <div className="category">category</div>
          <Link to={`/categories/audios/product/1}`} className="product-name">
            {truncateStr('Product Name', 15)}
          </Link>
          <div className="price">
            <div className="new">$100.00</div>
            <del>$250.00</del>
          </div>
        </div>
      </div>
      <div className="align-tiny-product-wrapper flex-align-center">
        <Link to={`/categories/audios/product/1`} className="img-wrapper">
          <img
            src="https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/GamePad-300x300.jpg"
            alt="product"
          />
        </Link>

        <div className="content">
          <div className="category">category</div>
          <Link to={`/categories/audios/product/1}`} className="product-name">
            {truncateStr('Product Name', 15)}
          </Link>
          <div className="price">
            <div className="new">$100.00</div>
            <del>$250.00</del>
          </div>
        </div>
      </div>
      <div className="align-tiny-product-wrapper flex-align-center">
        <Link to={`/categories/audios/product/1`} className="img-wrapper">
          <img
            src="https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/GamePad-300x300.jpg"
            alt="product"
          />
        </Link>

        <div className="content">
          <div className="category">category</div>
          <Link to={`/categories/audios/product/1}`} className="product-name">
            {truncateStr('Product Name', 15)}
          </Link>
          <div className="price">
            <div className="new">$100.00</div>
            <del>$250.00</del>
          </div>
        </div>
      </div>
      <div className="align-tiny-product-wrapper flex-align-center">
        <Link to={`/categories/audios/product/1`} className="img-wrapper">
          <img
            src="https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/GamePad-300x300.jpg"
            alt="product"
          />
        </Link>

        <div className="content">
          <div className="category">category</div>
          <Link to={`/categories/audios/product/1}`} className="product-name">
            {truncateStr('Product Name', 15)}
          </Link>
          <div className="price">
            <div className="new">$100.00</div>
            <del>$250.00</del>
          </div>
        </div>
      </div>
      <div className="align-tiny-product-wrapper flex-align-center">
        <Link to={`/categories/audios/product/1`} className="img-wrapper">
          <img
            src="https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/GamePad-300x300.jpg"
            alt="product"
          />
        </Link>

        <div className="content">
          <div className="category">category</div>
          <Link to={`/categories/audios/product/1}`} className="product-name">
            {truncateStr('Product Name', 15)}
          </Link>
          <div className="price">
            <div className="new">$100.00</div>
            <del>$250.00</del>
          </div>
        </div>
      </div>
      <div className="align-tiny-product-wrapper flex-align-center">
        <Link to={`/categories/audios/product/1`} className="img-wrapper">
          <img
            src="https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/GamePad-300x300.jpg"
            alt="product"
          />
        </Link>

        <div className="content">
          <div className="category">category</div>
          <Link to={`/categories/audios/product/1}`} className="product-name">
            {truncateStr('Product Name', 15)}
          </Link>
          <div className="price">
            <div className="new">$100.00</div>
            <del>$250.00</del>
          </div>
        </div>
      </div>
      <div className="align-tiny-product-wrapper flex-align-center">
        <Link to={`/categories/audios/product/1`} className="img-wrapper">
          <img
            src="https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/GamePad-300x300.jpg"
            alt="product"
          />
        </Link>

        <div className="content">
          <div className="category">category</div>
          <Link to={`/categories/audios/product/1}`} className="product-name">
            {truncateStr('Product Name', 15)}
          </Link>
          <div className="price">
            <div className="new">$100.00</div>
            <del>$250.00</del>
          </div>
        </div>
      </div>
      <div className="align-tiny-product-wrapper flex-align-center">
        <Link to={`/categories/audios/product/1`} className="img-wrapper">
          <img
            src="https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/GamePad-300x300.jpg"
            alt="product"
          />
        </Link>

        <div className="content">
          <div className="category">category</div>
          <Link to={`/categories/audios/product/1}`} className="product-name">
            {truncateStr('Product Name', 15)}
          </Link>
          <div className="price">
            <div className="new">$100.00</div>
            <del>$250.00</del>
          </div>
        </div>
      </div>
      <div className="align-tiny-product-wrapper flex-align-center">
        <Link to={`/categories/audios/product/1`} className="img-wrapper">
          <img
            src="https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/GamePad-300x300.jpg"
            alt="product"
          />
        </Link>

        <div className="content">
          <div className="category">category</div>
          <Link to={`/categories/audios/product/1}`} className="product-name">
            {truncateStr('Product Name', 15)}
          </Link>
          <div className="price">
            <div className="new">$100.00</div>
            <del>$250.00</del>
          </div>
        </div>
      </div>
      <div className="align-tiny-product-wrapper flex-align-center">
        <Link to={`/categories/audios/product/1`} className="img-wrapper">
          <img
            src="https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/GamePad-300x300.jpg"
            alt="product"
          />
        </Link>

        <div className="content">
          <div className="category">category</div>
          <Link to={`/categories/audios/product/1}`} className="product-name">
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

export default CategoriesFeatured
