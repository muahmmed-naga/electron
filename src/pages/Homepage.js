import React from 'react';

// Components
import HomepageBanner from '../components/homepage-banner/homepage-banner.comp';
import HomepageCarousel from '../components/homepage-carousel/homepage-carousel.comp';
import HomepageCategoriesTabs from '../components/categories-tab/categories-tab.comp';
import AppMainNavigator from '../components/app-main-navigator/app-main-navigator.comp';
import HomepageTabContent from '../components/homepage-tab-content/homepage-tab-content.comp';
import BestSellerSection from '../components/best-seller-section/best-seller-section.comp';

// Styles

const Homepage = () => {
  return (
    <div className="home-page-wrapper">
      <AppMainNavigator />
      <HomepageCarousel />
      <HomepageBanner />
      <HomepageTabContent />
      <HomepageCategoriesTabs />
      <BestSellerSection />
    </div>
  );
};

export default Homepage;
