import React, { useEffect } from "react";

// Components
import ShopAndSave from "../components/shop-and-save.comp";
import NewArrivals from "../components/new-arrivals";
import HomepageBanner from "../components/homepage-banner";
import HomepageCarousel from "../components/homepage-carousel";
import HomepageCategoriesTabs from "../components/categories-tab";
import AppMainNavigator from "../components/app-main-navigator";
import BestSellerSection from "../components/best-seller-section";
import HomepageTabContent from "../components/homepage-tab-content";
import ProductsMultiColumns from "../components/products-multi-colums";

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
      <hr style={{ marginTop: "50px" }} />
      <HomepageTabContent />
      <hr style={{ marginTop: "50px" }} />
      <HomepageCategoriesTabs />
      <hr style={{ marginTop: "50px" }} />
      <BestSellerSection />
      <ShopAndSave />
      <NewArrivals />
      <ProductsMultiColumns />
    </div>
  );
};

export default Homepage;
