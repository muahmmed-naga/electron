import React from 'react';

// Components
import AlignTinyProduct from '../../../align-tiny-product/align-tiny-product.comp';

// Assets
import TOP_20 from '../../data/topTwenty';

const Top20TabContent = () => {
  return (
    <div className="tab-content">
      {TOP_20.map((item) => (
        <AlignTinyProduct key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Top20TabContent;
