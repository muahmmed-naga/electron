import React from "react";

// Components
import TinyProduct from "../../../tiny-product/tiny-product.comp";

// Assets
import PRODUCTS_DATA from "../../../../data/products";

// Styles
import "./right-side-tab-featured.styles.scss";

const RightSideTabFeatured = () => {
  const { tabContent } = PRODUCTS_DATA;
  const { featured } = tabContent;
  const { main } = featured;

  return (
    <div className="righ-side-tab-featured">
      {main.map((item, idx) => (
        <TinyProduct key={idx} {...item} routeKey="tabContent" />
      ))}
    </div>
  );
};

export default RightSideTabFeatured;
