import React, { useEffect } from "react";

// Components
import { Row, Col } from "react-bootstrap";
import RouteNavigator from "../components/route-navigator";
import CategoriesPageLeftSide from "../components/categories-page-left";
import CategoriesPageRightSide from "../components/categories-page-right";
import ProductsMultiColumns from "../components/products-multi-colums";

const CategoriesPage = () => {
  // Handlers functions
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `Electron | All Categories Page`;
  });

  return (
    <>
      <div className="custom-container categories-page-wrapper">
        <RouteNavigator prev="home" current="product" />
        <Row>
          <Col sm={3}>
            <CategoriesPageLeftSide />
          </Col>
          <Col sm={9}>
            <CategoriesPageRightSide />
          </Col>
        </Row>
      </div>
      <ProductsMultiColumns />
    </>
  );
};

export default CategoriesPage;
