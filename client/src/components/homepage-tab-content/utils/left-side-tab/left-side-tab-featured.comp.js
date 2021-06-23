// Components
import { Link } from "react-router-dom";

// Styles
import "./left-side-tab-featured.styles.scss";

const LeftSideTabFeatured = () => {
  return (
    <div className="left-side-tab-featured">
      <Link
        to={`/categories/gaming/product/60cf58ff16b5a716c0387507`}
        className="img-wrapper"
      >
        <img
          src={
            "https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/Laptop-300x300.jpg"
          }
          alt="tab-1"
        />
      </Link>
      <Link
        to={`/categories/gaming/product/60cf58ff16b5a716c0387507`}
        className="product-name"
      >
        <div>Handcrafted Frozen Soap</div>
      </Link>
      <div className="text-muted">Electronics</div>
      <div className="price flex-align-center">
        <div className="new">$120.00</div>
        <del>$140.00</del>
      </div>
      <div className="special-offer">special offer</div>
    </div>
  );
};

export default LeftSideTabFeatured;
