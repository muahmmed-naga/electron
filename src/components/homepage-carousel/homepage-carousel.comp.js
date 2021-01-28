import React from 'react';

// Components
import AwesomeSlider from 'react-awesome-slider';
import { Link } from 'react-router-dom';

// Assets
import SliderBG from '../../assets/images/slider-bg.jpg';
import SlideImg1 from '../../assets/images/slider-1.png';
import SlideImg2 from '../../assets/images/slider-2.png';
import SlideImg3 from '../../assets/images/slider-3.png';

// Styles
import './homepage-carousel.styles.scss';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';

const HomepageCarousel = () => {
  return (
    <div className="homepage-carousel-wrapper">
      <AwesomeSlider animation="cubeAnimation">
        <div className="item-wrapper" style={{ backgroundImage: SliderBG }}>
          <div className="slide-1-caption">
            <div className="text-1">the new standard </div>
            <div className="text-2">UNDER FAVORABLE SMARTWATCHES</div>
            <div className="cation bold-false">
              <span className="title-price">From</span>
              <p>
                {' '}
                <span className="small-size">$</span>749
                <span className="small-size">99</span>
              </p>
            </div>
            <Link to="/shop" className="start-buying">
              start buying
            </Link>
          </div>
          <div className="img-container">
            <img src={SlideImg2} alt="" />
          </div>
        </div>

        <div className="item-wrapper">
          <div className="slide-1-caption">
            <div className="text-1">
              TIMEPIECES THAT <br /> MAKE A STATEMENT <br /> UP TO{' '}
            </div>
            <div
              className="text-2"
              style={{
                fontSize: '3.5rem',
                fontWeight: '700',
                color: '#000000ab',
              }}
            >
              52%
            </div>
            <Link to="/shop" className="start-buying">
              start buying
            </Link>
          </div>
          <div className="img-container">
            <img src={SlideImg1} alt="" />
          </div>
        </div>

        <div className="item-wrapper">
          <div className="slide-1-caption">
            <div className="text-1">the new standard </div>
            <div className="text-2">UNDER FAVORABLE SMARTWATCHES</div>
            <div className="cation bold-false">
              <span className="title-price">From</span>
              <p>
                {' '}
                <span className="small-size">$</span>749
                <span className="small-size">99</span>
              </p>
            </div>
            <Link to="/shop" className="start-buying">
              start buying
            </Link>
          </div>
          <div className="img-container">
            <img src={SlideImg3} alt="" />
          </div>
        </div>
      </AwesomeSlider>
    </div>
  );
};

export default HomepageCarousel;
