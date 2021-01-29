import React from 'react';
import ProductsColumn from '../products-column/products-column.comp';

// Styles
import './products-multi-colums.styles.scss';

const data = [
  {
    imgUrl:
      'https://cdn.shopify.com/s/files/1/0066/4322/0562/products/GoldPhone_bd50e26e-6236-4648-88db-d0b8a94a1bde_540x.jpg?v=1605600708',
  },
  {
    imgUrl:
      'https://cdn.shopify.com/s/files/1/0066/4322/0562/products/GoldPhone_bd50e26e-6236-4648-88db-d0b8a94a1bde_540x.jpg?v=1605600708',
  },
  {
    imgUrl:
      'https://cdn.shopify.com/s/files/1/0066/4322/0562/products/GoldPhone_bd50e26e-6236-4648-88db-d0b8a94a1bde_540x.jpg?v=1605600708',
  },
];

const ProductsMultiColumns = () => {
  return (
    <div className="custom-container products-multi-columns-wrapper m-top-50">
      <ProductsColumn title="Featured products" data={data} />
      <ProductsColumn title="Onsale Products" data={data} />
      <ProductsColumn title="Top Rated Products" data={data} />
      <ProductsColumn title="Newest Products" data={data} />
    </div>
  );
};

export default ProductsMultiColumns;
