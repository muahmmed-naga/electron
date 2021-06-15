import React, { useEffect } from "react";

// Components
import { Switch, Route } from "react-router-dom";
import CartPage from "./pages/cart-page";
import AppFooter from "./components/app-footer";
import AppMainHeader from "./components/main-header";
import ScrollHeader from "./components/scroll-header";
import AppUpperHeader from "./components/upper-header";
import ResponsiveMainHeader from "./components/responsive/main-header";

// Pages
import Homepage from "./pages/Homepage";
import Signup from "./pages/Signup";
import LoginPage from "./pages/Login";
import TestPage from "./pages/TestPage";
import PageNotFound from "./pages/PageNotFound";
import shopPage from "./pages/ShopPage";
import ProductPage from "./pages/product-page";

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
        <Route exact path="/products/all" component={shopPage} />
        <Route
          path="/categories/:category/product/:id"
          component={ProductPage}
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
