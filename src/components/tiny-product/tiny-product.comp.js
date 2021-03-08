import React from "react";

// Components
import { Link } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";

// Styles
import "./tiny-product.styles.scss";

const TinyProduct = ({ id, img, name, price, category, routeUrl }) => {
  return (
    <div className="tiny-product-wrapper">
      <div className="category">{category}</div>
      <Link to={`${routeUrl}/${id}`} className="product-name">
        {name}
      </Link>
      <Link to={`${routeUrl}/${id}`} className="img-wrapper">
        <img src={img} alt="product" />
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
  );
};

export default TinyProduct;
