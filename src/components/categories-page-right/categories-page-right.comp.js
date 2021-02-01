import React from 'react';

// Components
import ViewNavigator from './utils/view-navigator.comp';

// Styles
import './categories-page-right.scss';

const CategoriesPageRightSide = () => {
  return (
    <div className="categories-page-right-wrapper">
      <div className="title">Products</div>
      <ViewNavigator />
    </div>
  );
};

export default CategoriesPageRightSide;
