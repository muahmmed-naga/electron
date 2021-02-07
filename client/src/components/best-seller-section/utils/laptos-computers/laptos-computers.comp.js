import React from 'react';

// Components
import AlignTinyProduct from '../../../align-tiny-product/align-tiny-product.comp';

// Assets
import LABTOP_COMPUTERS from '../../data/labtops_computers';

const LaptopsComputersTabContent = () => {
  return (
    <div className="tab-content">
      {LABTOP_COMPUTERS.map((item) => (
        <AlignTinyProduct key={item.id} {...item} />
      ))}
    </div>
  );
};

export default LaptopsComputersTabContent;
