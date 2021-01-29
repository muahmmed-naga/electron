import React from 'react';

// Components
import { Link } from 'react-router-dom';

// Styles
import './align-tiny-product.styles.scss';

const AlignTinyProduct = ({ imgUrl }) => {
  // Truncate Strings
  const truncateStr = (str, max) => {
    if (str?.length > max) {
      return str.slice(0, max - 3) + '...';
    } else return str;
  };

  return (
    <div className="align-tiny-product-wrapper flex-align-center">
      <Link to="#" className="img-wrapper">
        <img src={imgUrl} alt="product" />
      </Link>

      <div className="content">
        <div className="category">category</div>
        <div className="product-name">{truncateStr('Product Name', 15)}</div>
        <div className="price">
          <div className="new">$200.00</div>
          <del>$250.00</del>
        </div>
      </div>
    </div>
  );
};

export default AlignTinyProduct;
