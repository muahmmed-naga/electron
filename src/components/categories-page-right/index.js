import React from "react";

// Components
import ViewNavigator from "./utils/view-navigator";
import CategoiresPageMainContent from "./utils/main-content";

// Styles
import "./index.scss";

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
