import React from 'react';

// Components
import RouteNavigator from '../components/route-navigator/route-navigator.comp';

const CategoriesPage = () => {
  return (
    <div className="custom-container categories-page-wrapper">
      <RouteNavigator prev="home" current="product" />
      <span>collections page</span>
    </div>
  );
};

export default CategoriesPage;
