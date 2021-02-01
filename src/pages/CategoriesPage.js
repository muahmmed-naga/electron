import React from 'react';

// Components
import { Row, Col } from 'react-bootstrap';
import RouteNavigator from '../components/route-navigator/route-navigator.comp';
import CategoriesPageLeftSide from '../components/categories-page-left/categories-page-left.comp';

const CategoriesPage = () => {
  return (
    <div className="custom-container categories-page-wrapper">
      <RouteNavigator prev="home" current="product" />
      <Row>
        <Col sm={3}>
          <CategoriesPageLeftSide />
        </Col>
        <Col sm={9}>sm=10</Col>
      </Row>
    </div>
  );
};

export default CategoriesPage;
