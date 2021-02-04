import React from 'react';

// Components
import AlignTinyProduct from '../align-tiny-product/align-tiny-product.comp';

// Assets
import MULTI_COLUMNS from '../products-multi-colums/data';

const TopRated = ({ title, data }) => {
  const { topRated } = MULTI_COLUMNS;

  return (
    <div className="product-colum-wrapper">
      <div className="title p-bottom-10">
        <span className="p-bottom-10">{title}</span>
      </div>
      {topRated.map((item, idx) => (
        <AlignTinyProduct key={idx} {...item} />
      ))}
    </div>
  );
};

export default TopRated;
