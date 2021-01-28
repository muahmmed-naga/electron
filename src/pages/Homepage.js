import React from 'react';

// Components
import HomepageCarousel from '../components/homepage-carousel/homepage-carousel.comp';
import AppMainNavigator from '../components/app-main-navigator/app-main-navigator.comp';
import HomepageBanner from '../components/homepage-banner/homepage-banner.comp';

// Styles

const Homepage = () => {
  return (
    <div className="home-page-wrapper">
      <AppMainNavigator />
      <HomepageCarousel />
      <HomepageBanner />
    </div>
  );
};

export default Homepage;
