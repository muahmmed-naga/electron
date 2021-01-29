import React from 'react';

// Components
import AlignTinyProduct from '../align-tiny-product/align-tiny-product.comp';

const ProductsColumn = ({ title, data }) => {
  return (
    <div className="product-colum-wrapper">
      <div className="title p-bottom-10">
        <span className="p-bottom-10">{title}</span>
      </div>
      {data.map(({ imgUrl }, idx) => (
        <AlignTinyProduct key={idx} imgUrl={imgUrl} />
      ))}
    </div>
  );
};

export default ProductsColumn;
