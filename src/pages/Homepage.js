import React from 'react';

// Components
import HomepageCarousel from '../components/homepage-carousel/homepage-carousel.comp';
import AppMainNavigator from '../components/app-main-navigator/app-main-navigator.comp';

// Styles

const Homepage = () => {
  return (
    <div className="home-page-wrapper" style={{ position: 'relative' }}>
      <AppMainNavigator />
      <HomepageCarousel />
    </div>
  );
};

export default Homepage;
