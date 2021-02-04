import React from 'react';
import BEST_DEALS from './data/best-deals.data';
import CategoriesLeftSide from './utils/left-side/left-side.comp';
import MiddleImgGallery from './utils/middle-img-gallery/middle-img-gallery.comp';
import CategoriesRightSide from './utils/right-side/right-side.comp';

const BestDeals = () => {
  const { left, middle, right } = BEST_DEALS;

  return (
    <>
      <div className="left-side-wrapper content-item">
        <CategoriesLeftSide data={left} />
      </div>
      <div className="middle-side-wrapper content-item">
        <MiddleImgGallery data={middle} />
      </div>
      <div className="right-side-wrapper content-item">
        <CategoriesRightSide data={right} />
      </div>
    </>
  );
};

export default BestDeals;
