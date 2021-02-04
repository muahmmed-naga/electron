import React from 'react';

// Components
import AlignTinyProduct from '../align-tiny-product/align-tiny-product.comp';

// Assets
import MULTI_COLUMNS from '../products-multi-colums/data';

const FeaturedColumn = ({ title }) => {
  const { featured } = MULTI_COLUMNS;

  return (
    <div className="product-colum-wrapper">
      <div className="title p-bottom-10">
        <span className="p-bottom-10">{title}</span>
      </div>
      {featured.map((item, idx) => (
        <AlignTinyProduct key={idx} {...item} />
      ))}
    </div>
  );
};

export default FeaturedColumn;
