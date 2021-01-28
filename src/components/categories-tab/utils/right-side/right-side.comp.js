import React from 'react';

// Components
import TinyProduct from '../../../tiny-product/tiny-product.comp';

// Assets
import ProductImg from '../../../../assets/images/products/product-2.jpg';

const CategoriesRightSide = () => {
  return (
    <>
      <TinyProduct ProductImg={ProductImg} />
      <TinyProduct ProductImg={ProductImg} />
      <TinyProduct ProductImg={ProductImg} />
      <TinyProduct ProductImg={ProductImg} />
    </>
  );
};

export default CategoriesRightSide;
