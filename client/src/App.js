import React, { useEffect, lazy, Suspense } from "react";

// Components
import { Switch, Route, Redirect } from "react-router-dom";
import CartPage from "./pages/cart-page";
// import AppFooter from "./components/app-footer";
import AppMainHeader from "./components/main-header";
import ScrollHeader from "./components/scroll-header";
import AppUpperHeader from "./components/upper-header";
import ResponsiveMainHeader from "./components/responsive/main-header";

// Pages
import UserSignUp from "./pages/Signup";
import LoginPage from "./pages/Login";
import TestPage from "./pages/TestPage";
import PageNotFound from "./pages/PageNotFound";
import ProductPage from "./pages/product-page";
import { useSelector } from "react-redux";
import UserProfilePage from "./pages/UserProfile";
import ShippingInfoPage from "./pages/ShippingInfoPage";
import CheckoutPaymentMethod from "./pages/checkout-payment-method";
import CheckoutPlaceOrder from "./pages/checkout-placeorder";
import UserOrdersPage from "./pages/UserOrdersPage";
import LoadingScreen from "./components/loading-screen";

import HomePage from "./pages/Homepage";
// import ShopPage from "./pages/ShopPage";

const ShopPage = lazy(() => import("./pages/ShopPage"));

const App = () => {
  const { userInfo } = useSelector(state => state.userLogin);
  const { shippingAddress } = useSelector(state => state.cart);

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
        {/* <Suspense fallback={<LoadingScreen />}>
        </Suspense> */}
        <Suspense fallback={<LoadingScreen />}>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/products/all" component={ShopPage} />
          <Route path="/cart" component={CartPage} />

          <Route
            path="/categories/:category/product/:id"
            component={ProductPage}
          />

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

          <Route
            exact
            path="/checkout/payment-method"
            render={
              !userInfo?.name || !shippingAddress
                ? () => <Redirect to="/shipping-info" />
                : props => <CheckoutPaymentMethod {...props} />
            }
          />

          <Route
            exact
            path="/checkout/placeorder"
            render={
              !userInfo?.name || !shippingAddress
                ? () => <Redirect to="/user/login" />
                : props => <CheckoutPlaceOrder {...props} />
            }
          />

          <Route
            exact
            path="/user/orders/:id"
            render={
              !userInfo?.name || !shippingAddress
                ? () => <Redirect to="/user/login" />
                : props => <UserOrdersPage {...props} />
            }
          />
        </Suspense>
        <Route path="/test" component={TestPage} />
        <Route component={PageNotFound} />
      </Switch>

      {/* <AppFooter /> */}
    </div>
  );
};

export default App;
