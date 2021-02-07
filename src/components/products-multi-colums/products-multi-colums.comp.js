import React from 'react';

// Components
import TopRated from './TopRated.comp';
import OnSaleColum from './OnSale.comp';
import NewestColumn from './Newest.comp';
import FeaturedColumn from './Featured.comp';

// Styles
import './products-multi-colums.styles.scss';

const ProductsMultiColumns = () => {
  return (
    <div className="custom-container products-multi-columns-wrapper m-top-50">
      <FeaturedColumn title="Featured products" />
      <OnSaleColum title="On Sale Products" />
      <NewestColumn title="Newest Products" />
      <TopRated title="Top Rated Products" />
    </div>
  );
};

export default ProductsMultiColumns;
