import React from 'react';

// Components
import { Link } from 'react-router-dom';

// Assets
import TABS_CONTENT from '../../../../data/tab-content';

// Styles
import './left-side-tab-featured.styles.scss';

const LeftSideTabTopRated = () => {
  const { topRated } = TABS_CONTENT;

  // Featured
  const { id, imgUrl, name, price, isSave } = topRated.left;

  return (
    <div className="left-side-tab-featured">
      <Link to={`/collections/product/${id}`} className="img-wrapper">
        <img src={imgUrl} alt="tab-1" />
      </Link>

      <Link to="#" className="product-name">
        <div>{name}</div>
      </Link>

      <div className="price flex-align-center">
        <div className="new">${price}.00</div>
        <del>$300.00</del>
      </div>

      <div className="on-stock">
        <div className="head">
          <span>
            Already Sold: <b>6</b>
          </span>
          <span>
            Available: <b>26</b>
          </span>
        </div>

        <div className="progress">
          <div className="solded" />
        </div>
      </div>

      <div className="special-offer">special offer</div>
      <div className="discound-offer">
        save <b>{isSave.percent}%</b>
      </div>
    </div>
  );
};

export default LeftSideTabTopRated;
