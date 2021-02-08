import React from "react";

// Components
import TinyProduct from "../../../tiny-product/tiny-product.comp";

const CategoriesRightSide = ({ data }) => {
  return (
    <>
      {data.map(item => (
        <TinyProduct
          key={item.id}
          {...item}
          routeUrl="/categories/best-sellers/product"
        />
      ))}
    </>
  );
};

export default CategoriesRightSide;
