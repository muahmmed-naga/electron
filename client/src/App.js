import React, { useEffect } from "react";

// Components
import { Switch, Route, Redirect } from "react-router-dom";
import CartPage from "./pages/cart-page";
import AppFooter from "./components/app-footer";
import AppMainHeader from "./components/main-header";
import ScrollHeader from "./components/scroll-header";
import AppUpperHeader from "./components/upper-header";
import ResponsiveMainHeader from "./components/responsive/main-header";

// Pages
import Homepage from "./pages/Homepage";
import UserSignUp from "./pages/Signup";
import LoginPage from "./pages/Login";
import TestPage from "./pages/TestPage";
import PageNotFound from "./pages/PageNotFound";
import shopPage from "./pages/ShopPage";
import ProductPage from "./pages/product-page";
import { useSelector } from "react-redux";
import UserProfilePage from "./pages/UserProfile";
import ShippingInfoPage from "./pages/ShippingInfoPage";

const App = () => {
  const { userInfo } = useSelector(state => state.userLogin);

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

        <Route path="/cart" component={CartPage} />
        <Route
          path="/user/login"
          render={
            userInfo?.name ? () => <Redirect to="/" /> : () => <LoginPage />
          }
        />

        <Route
          path="/user/signup"
          render={
            userInfo?.name ? () => <Redirect to="/" /> : () => <UserSignUp />
          }
        />

        <Route
          exact
          path="/user/profile"
          render={
            !userInfo?.name
              ? () => <Redirect to="/" />
              : () => <UserProfilePage />
          }
        />
        <Route
          exact
          path="/shipping-info"
          render={
            !userInfo?.name
              ? () => <Redirect to="/user/login" />
              : props => <ShippingInfoPage {...props} />
          }
        />

        <Route path="/test" component={TestPage} />
        <Route component={PageNotFound} />
      </Switch>

      <AppFooter />
    </div>
  );
};

export default App;
