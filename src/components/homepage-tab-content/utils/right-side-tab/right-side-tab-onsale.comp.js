import React from 'react';

// Components
import TinyProduct from '../../../tiny-product/tiny-product.comp';

// Assets
import TABS_CONTENT from '../../../../data/tab-content';

// Styles
import './right-side-tab-featured.styles.scss';

const RightSideTabOnSale = ({ visiableTab }) => {
  const { onSale } = TABS_CONTENT;

  return (
    <div
      className={`righ-side-tab-featured ${
        visiableTab === 'on-sale-tab' ? 'on-sale-visiable' : 'hidden'
      }`}
    >
      {onSale.main.map((item, idx) => (
        <TinyProduct key={idx} {...item} />
      ))}
    </div>
  );
};

export default RightSideTabOnSale;
