import React, { useEffect } from "react";

// Components
import { Switch, Route } from "react-router-dom";
import CartPage from "./pages/cart-page/cart-page.comp";
import AppFooter from "./components/app-footer/app-footer.comp";
import AppMainHeader from "./components/main-header/main-header.comp";
import ScrollHeader from "./components/scroll-header/scroll-header.comp";
import AppUpperHeader from "./components/upper-header/upper-header.comp";
import ResponsiveMainHeader from "./components/responsive/main-header/main-header.comp";

// Pages
import Signup from "./pages/Signup";
import LoginPage from "./pages/Login";
import Homepage from "./pages/Homepage";
import TestPage from "./pages/TestPage";
import PageNotFound from "./pages/PageNotFound";
import CategoriesPage from "./pages/CategoriesPage";
import ProductPage from "./pages/product-page/product-page.comp";
import CategoriesAudios from "./pages/categories-audios/categories-audios.comp";
import CategoriesCameras from "./pages/categories-carmeras/categories-cameras.comp";
import CategoriesFeatured from "./pages/categories-featured/categories-featured.comp";
import CategoriesTVAndVideos from "./pages/categories-tv-videos/categories-tv-videos.comp";
import CategoriesBestSellers from "./pages/categories-bestsellers/categories-bestsellers.comp";
import CategoriesOnSale from "./pages/categories-on-sale/categories-on-sale.comp";
import CategoriesTopRated from "./pages/categories-top-rated/categories-top-rated.comp";
import NewArrivalsPage from "./pages/new-arrivals/new-arrivals.comp";

function App() {
  const scrollFunction = () => {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      document.getElementById("scroll-header").style.top = "0";
    } else {
      document.getElementById("scroll-header").style.top = "-64px";
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    window.onscroll = () => scrollFunction();
  });

  return (
    <div className="App">
      <ScrollHeader />
      <AppUpperHeader />
      <AppMainHeader />
      <ResponsiveMainHeader />

      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/products/all" component={CategoriesPage} />
        <Route
          path="/collections/:category/product/:id"
          component={ProductPage}
        />

        {/* Top Topics */}
        <Route
          exact
          path="/categories/featured/product/:id"
          component={CategoriesFeatured}
        />

        <Route
          exact
          path="/categories/on-sale/product/:id"
          component={CategoriesOnSale}
        />

        <Route
          exact
          path="/categories/top-rated/product/:id"
          component={CategoriesTopRated}
        />

        {/* Top Topics */}

        {/* Categories Routes */}
        <Route
          exact
          path="/categories/best-sellers/product/:id"
          component={CategoriesBestSellers}
        />

        <Route
          exact
          path="/categories/tv-videos/product/:id"
          component={CategoriesTVAndVideos}
        />

        <Route
          exact
          path="/categories/cameras/product/:id"
          component={CategoriesCameras}
        />

        <Route
          exact
          path="/categories/audios/product/:id"
          component={CategoriesAudios}
        />

        <Route
          exact
          path="/categories/new-arrivals/product/:id"
          component={NewArrivalsPage}
        />

        {/* Categories Routes */}

        <Route path="/cart" component={CartPage} />
        <Route exact path="/account/signup" component={Signup} />
        <Route exact path="/account/login" component={LoginPage} />
        <Route path="/test" component={TestPage} />
        <Route component={PageNotFound} />
      </Switch>

      <AppFooter />
    </div>
  );
}

export default App;
