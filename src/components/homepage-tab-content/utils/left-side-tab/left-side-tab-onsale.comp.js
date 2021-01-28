import React from 'react';

// Components
import { Link } from 'react-router-dom';

// Assets
import Img from '../../../../assets/images/homepage/tabs/left-2.jpg';

// Styles
import './left-side-tab-featured.styles.scss';

const LeftSideTabOnSale = () => {
  return (
    <div className="left-side-tab-featured">
      <Link to="#" className="img-wrapper">
        <img src={Img} alt="tab-1" />
      </Link>

      <Link to="#" className="product-name">
        <div>black fashion zapda</div>
      </Link>

      <div className="price flex-align-center">
        <div className="new">$220.00</div>
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
        save <b>30%</b>
      </div>
    </div>
  );
};

export default LeftSideTabOnSale;
