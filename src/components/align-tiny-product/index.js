import React from "react";

// Components
import { Link } from "react-router-dom";

// Styles
import "./index.scss";

const AlignTinyProduct = ({ id, name, imgUrl, price, category }) => {
  // Truncate Strings
  const truncateStr = (str, max) => {
    if (str?.length > max) {
      return str.slice(0, max - 3) + "...";
    } else return str;
  };

  return (
    <div className="align-tiny-product-wrapper flex-align-center">
      <Link to={`/collections/product/${id}`} className="img-wrapper">
        <img src={imgUrl} alt="product" />
      </Link>

      <div className="content">
        <div className="category">{category}</div>
        <Link to={`/collections/product/${id}`} className="product-name">
          {truncateStr(name, 15)}
        </Link>
        <div className="price">
          <div className="new">${price}.00</div>
          <del>$250.00</del>
        </div>
      </div>
    </div>
  );
};

export default AlignTinyProduct;
