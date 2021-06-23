import React from "react";

// Components
import { Link } from "react-router-dom";

// Styles
import "./left-side-tab-featured.styles.scss";

const LeftSideTabTopRated = () => {
  return (
    <div className="left-side-tab-featured">
      <Link
        to={`/categories/gaming/product/60cf58ff16b5a716c038750f`}
        className="img-wrapper"
      >
        <img
          src="https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/Laptop4-300x300.jpg"
          alt="tab-1"
        />
      </Link>

      <Link
        to={`/categories/gaming/product/60cf58ff16b5a716c038750f`}
        className="product-name"
      >
        <div>Rustic Rubber Car</div>
      </Link>

      <div className="text-muted">Grocery</div>

      <div className="price flex-align-center">
        <div className="new">$213</div>
        <del>$250</del>
      </div>

      <div className="special-offer">special offer</div>
    </div>
  );
};

export default LeftSideTabTopRated;
