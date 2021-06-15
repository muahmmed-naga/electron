import React from "react";

// Components
import { Link } from "react-router-dom";

// Styles
import "./index.scss";

const AlignTinyProduct = ({ _id, name, image, price, category }) => {
  return (
    <div className="align-tiny-product-wrapper flex-align-center">
      <Link
        to={`/categories/${category
          .replace(" ", "-")
          .toLowerCase()}/product/${_id}`}
        className="img-wrapper"
      >
        <img src={image} alt="product" />
      </Link>

      <div className="content">
        <div className="category">{category}</div>
        <Link
          to={`/categories/${category
            .replace(" ", "-")
            .toLowerCase()}/product/${_id}`}
          className="product-name"
        >
          {name.substring(0, 20) + "..."}
        </Link>
        <div className="price">
          <div className="new">${price}.00</div>
        </div>
      </div>
    </div>
  );
};

export default AlignTinyProduct;
