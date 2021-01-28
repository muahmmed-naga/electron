import React from 'react';

// Components
import HomepageCarousel from '../components/homepage-carousel/homepage-carousel.comp';
import AppMainNavigator from '../components/app-main-navigator/app-main-navigator.comp';
import HomepageBanner from '../components/homepage-banner/homepage-banner.comp';
import HomepageTabContent from '../components/homepage-tab-content/homepage-tab-content.comp';

// Styles

const Homepage = () => {
  return (
    <div className="home-page-wrapper">
      <AppMainNavigator />
      <HomepageCarousel />
      <HomepageBanner />
      <HomepageTabContent />
    </div>
  );
};

export default Homepage;
