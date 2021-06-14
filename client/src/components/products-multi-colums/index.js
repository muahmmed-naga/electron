import React from "react";

// Components
import TopRated from "./TopRated.comp";
import OnSaleColum from "./OnSale.comp";
import Cameras from "./Newest.comp";
import FeaturedColumn from "./Featured.comp";

// Styles
import "./index.scss";

const ProductsMultiColumns = () => {
  return (
    <div className="custom-container products-multi-columns-wrapper m-top-50">
      <FeaturedColumn title="Featured Products" />
      <OnSaleColum title="On Sale Products" />
      <Cameras title="Cameras Products" />
      <TopRated title="Top Rated Products" />
    </div>
  );
};

export default ProductsMultiColumns;
