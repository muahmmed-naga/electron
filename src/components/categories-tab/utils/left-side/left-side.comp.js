import React from 'react';

// Components
import TinyProduct from '../../../tiny-product/tiny-product.comp';

const CategoriesLeftSide = ({ data }) => {
  return (
    <>
      {data.map((item) => (
        <TinyProduct key={item.id} {...item} />
      ))}
    </>
  );
};

export default CategoriesLeftSide;
