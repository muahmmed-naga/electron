import React, { useEffect } from 'react';

// Components
import ShopAndSave from '../components/shop-and-save.comp';
import NewArrivals from '../components/new-arrivals/new-arrivals.comp';
import HomepageBanner from '../components/homepage-banner/homepage-banner.comp';
import HomepageCarousel from '../components/homepage-carousel/homepage-carousel.comp';
import HomepageCategoriesTabs from '../components/categories-tab/categories-tab.comp';
import AppMainNavigator from '../components/app-main-navigator/app-main-navigator.comp';
import BestSellerSection from '../components/best-seller-section/best-seller-section.comp';
import HomepageTabContent from '../components/homepage-tab-content/homepage-tab-content.comp';
import ProductsMultiColumns from '../components/products-multi-colums/products-multi-colums.comp';

// Styles

const Homepage = () => {
  // Handlers functions
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `Electron | Home Page`;
  });

  return (
    <div className="home-page-wrapper">
      <AppMainNavigator />
      <HomepageCarousel />
      <HomepageBanner />
      <HomepageTabContent />
      <HomepageCategoriesTabs />
      <BestSellerSection />
      <ShopAndSave />
      <NewArrivals />
      <ProductsMultiColumns />
    </div>
  );
};

export default Homepage;
