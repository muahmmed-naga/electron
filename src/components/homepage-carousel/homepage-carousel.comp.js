import React from 'react';

// Components
import AwesomeSlider from 'react-awesome-slider';

// Assets
import SlideImg1 from '../../assets/images/slider-1.png';

// Styles
import './homepage-carousel.styles.scss';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import { Link } from 'react-router-dom';

const HomepageCarousel = () => {
  return (
    <div className="homepage-carousel-wrapper">
      <AwesomeSlider animation="cubeAnimation">
        <div className="item-wrapper">
          <div className="slide-1-caption">
            <div className="text-1">
              the new <br /> standard{' '}
            </div>
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
          <img src={SlideImg1} alt="" />
        </div>
        <div className="item-wrapper">
          <span>hello 2</span>
          <img src={SlideImg1} alt="" />
        </div>
        <div className="item-wrapper">
          <span>hello3</span>
          <img src={SlideImg1} alt="" />
        </div>
      </AwesomeSlider>
    </div>
  );
};

export default HomepageCarousel;
