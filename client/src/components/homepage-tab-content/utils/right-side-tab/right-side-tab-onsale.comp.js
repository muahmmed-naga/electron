import React from "react";

// Components
import { Link } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";

// Styles
import "./right-side-tab-featured.styles.scss";

const RightSideTabOnSale = ({ data }) => {
  return (
    <div className="righ-side-tab-featured">
      {data.map(({ id, name, imgUrl, price, category }) => (
        <div className="tiny-product-wrapper" key={id}>
          <div className="category">{category}</div>
          <Link
            to={`/collections/featured/product/${id}`}
            className="product-name"
            style={{ textAlign: "center" }}
          >
            {name.substring(0, 25) + "..."}
          </Link>
          <Link
            to={`/collections/featured/product/${id}`}
            className="img-wrapper"
          >
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
      ))}
    </div>
  );
};

export default RightSideTabOnSale;
