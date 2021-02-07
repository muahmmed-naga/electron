import React, { useEffect } from 'react';

// Components
import { Switch, Route } from 'react-router-dom';
import CartPage from './pages/cart-page/cart-page.comp';
import AppFooter from './components/app-footer/app-footer.comp';
import AppMainHeader from './components/main-header/main-header.comp';
import ScrollHeader from './components/scroll-header/scroll-header.comp';
import AppUpperHeader from './components/upper-header/upper-header.comp';
import ResponsiveMainHeader from './components/responsive/main-header/main-header.comp';

// Pages
import Signup from './pages/Signup';
import LoginPage from './pages/Login';
import Homepage from './pages/Homepage';
import TestPage from './pages/TestPage';
import PageNotFound from './pages/PageNotFound';
import CategoriesPage from './pages/CategoriesPage';
import ProductPage from './pages/product-page/product-page.comp';

function App() {
  const scrollFunction = () => {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      document.getElementById('scroll-header').style.top = '0';
    } else {
      document.getElementById('scroll-header').style.top = '-64px';
    }
  };

  useEffect(() => {
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
        <Route exact path="/categories/all" component={CategoriesPage} />
        <Route path="/collections/product/:id" component={ProductPage} />
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
