import React from 'react';

// Components
import { Link } from 'react-router-dom';

// Assets
import Item1 from '../../assets/images/homepage/banner/home-banner-1.jpg';
import Item2 from '../../assets/images/homepage/banner/home-banner-2.jpg';
import Item3 from '../../assets/images/homepage/banner/home-banner-2.webp';
import Item4 from '../../assets/images/homepage/banner/home-banner-4.png';

// Styles
import './homepage-banner.styles.scss';

const HomepageBanner = () => {
  return (
    <div className="custom-container homepage-banner-wrapper m-top-50">
      <Link to="#" className="item">
        <img src={Item1} alt="item-1" />
      </Link>
      <Link to="#" className="item">
        <img src={Item2} alt="item-2" />
      </Link>
      <Link to="#" className="item">
        <img src={Item3} alt="item-3" />
      </Link>
      <Link to="#" className="item">
        <img src={Item4} alt="item-4" />
      </Link>
    </div>
  );
};

export default HomepageBanner;
