import React from 'react';

// Components
import { Switch, Route } from 'react-router-dom';
import AppMainHeader from './components/main-header/main-header.comp';
import AppUpperHeader from './components/upper-header/upper-header.comp';
import CartPage from './pages/cart-page/cart-page.comp';
import AppFooter from './components/app-footer/app-footer.comp';

// Pages
import Homepage from './pages/Homepage';
import CategoriesPage from './pages/CategoriesPage';
import TestPage from './pages/TestPage';
import PageNotFound from './pages/PageNotFound';
import ProductPage from './pages/product-page/product-page.comp';

function App() {
  return (
    <div className="App">
      <AppUpperHeader />
      <AppMainHeader />

      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/categories/all" component={CategoriesPage} />
        <Route path="/collections/:id" component={ProductPage} />
        <Route path="/cart" component={CartPage} />
        <Route path="/test" component={TestPage} />
        <Route component={PageNotFound} />
      </Switch>

      <AppFooter />
    </div>
  );
}

export default App;
