import React from 'react';

// Components
import ViewNavigator from './utils/view-navigator/view-navigator.comp';
import CategoiresPageMainContent from './utils/main-content/main-content.comp';

// Styles
import './categories-page-right.scss';

const CategoriesPageRightSide = () => {
  return (
    <div className="categories-page-right-wrapper">
      <div className="title">Products</div>
      <ViewNavigator />
      <CategoiresPageMainContent />
    </div>
  );
};

export default CategoriesPageRightSide;
