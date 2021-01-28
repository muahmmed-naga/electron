import React from 'react';

// Components
import TinyProduct from '../../../tiny-product/tiny-product.comp';

// Styles
import './right-side-tab-featured.styles.scss';

const RightSideTabFeatured = () => {
  return (
    <div className="righ-side-tab-featured">
      <TinyProduct />
      <TinyProduct />
      <TinyProduct />
      <TinyProduct />
      <TinyProduct />
      <TinyProduct />
      <TinyProduct />
      <TinyProduct />
    </div>
  );
};

export default RightSideTabFeatured;
