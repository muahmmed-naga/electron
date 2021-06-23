// Components,
import { Link } from "react-router-dom";

// Styles
import "./left-side-tab-featured.styles.scss";

const LeftSideTabOnSale = () => {
  return (
    <div className="left-side-tab-featured">
      <Link
        to={`/categories/gaming/product/60cf58ff16b5a716c038750d`}
        className="img-wrapper"
      >
        <img
          src="https://demo3.madrasthemes.com/electro/v2/wp-content/uploads/2016/03/Ultrabooks-300x300.jpg"
          alt="tab-1"
        />
      </Link>

      <Link
        to={`/categories/gaming/product/60cf58ff16b5a716c038750d`}
        className="product-name"
      >
        <div>Gorgeous Frozen Sausages</div>
      </Link>

      <div className="text-muted">Toys</div>

      <div className="price flex-align-center">
        <div className="new">$237</div>
        <del>$300.00</del>
      </div>

      <div className="special-offer">special offer</div>
    </div>
  );
};

export default LeftSideTabOnSale;
