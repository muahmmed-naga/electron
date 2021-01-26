import React from 'react';

// Components
import { Link } from 'react-router-dom';

// Styles
import './homepage-landing.styles.scss';

const HomePageLanding = () => {
  return (
    <div className="homepage-landing-wrapper">
      <div className="custom-container">
        <div className="content-wrapper flex-center-between">
          <div className="left-side">
            <div className="text-1">limited</div>
            <div className="text-2">week deal</div>
            <h4>HURRY UP BEFORE OFFER WILL END</h4>
          </div>
          <div className="right-side-wrapper flex-align-center">
            <div className="middle">
              <img
                src="//cdn.shopify.com/s/files/1/0066/4322/0562/products/single-homedemo_2048x.png?v=1604559861"
                alt="homepage-landing"
              />
            </div>
            <div className="right-side">
              <h4>
                Earphones Pods One S <br /> Bluetooth + USB 3.0 Cable
              </h4>
              <div className="price flex-align-center">
                <del className="old-price">$99.00</del>
                <span className="new-price">$77.00</span>
              </div>
              <Link to="#" className="buy-now">
                buy now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="footer">
        <div className="custom-container">
          <div className="content">footer</div>
        </div>
      </div> */}
    </div>
  );
};

export default HomePageLanding;
