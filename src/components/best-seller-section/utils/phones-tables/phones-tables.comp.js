import React from 'react';

// Components
import AlignTinyProduct from '../../../align-tiny-product/align-tiny-product.comp';

// Assets
import PHONE_TABLES from '../../data/phone_tables';

const PhonesTablesTabContent = () => {
  return (
    <div className="tab-content">
      {PHONE_TABLES.map((item) => (
        <AlignTinyProduct key={item.id} {...item} />
      ))}
    </div>
  );
};

export default PhonesTablesTabContent;
