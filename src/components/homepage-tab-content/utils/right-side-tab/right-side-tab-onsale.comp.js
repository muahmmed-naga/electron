import React from 'react';

// Components
import TinyProduct from '../../../tiny-product/tiny-product.comp';

// Assets
import ProductImg from '../../../../assets/images/products/product-2.jpg';

// Styles
import './right-side-tab-featured.styles.scss';

const RightSideTabOnSale = () => {
  return (
    <div className="righ-side-tab-featured">
      <TinyProduct ProductImg={ProductImg} />
      <TinyProduct ProductImg={ProductImg} />
      <TinyProduct ProductImg={ProductImg} />
      <TinyProduct ProductImg={ProductImg} />
      <TinyProduct ProductImg={ProductImg} />
      <TinyProduct ProductImg={ProductImg} />
      <TinyProduct ProductImg={ProductImg} />
      <TinyProduct ProductImg={ProductImg} />
    </div>
  );
};

export default RightSideTabOnSale;
