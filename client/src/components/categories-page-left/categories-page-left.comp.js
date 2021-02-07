import React from 'react';

// Components
import { Link } from 'react-router-dom';
import AliceCarousel from 'react-alice-carousel';
import TinyProduct from '../tiny-product/tiny-product.comp';
import { IoIosArrowForward } from 'react-icons/io';
import { Accordion, Card } from 'react-bootstrap';

// Styles
import 'react-alice-carousel/lib/alice-carousel.css';
import './categories-page-left.styles.scss';

const CategoriesPageLeftSide = () => {
  const responsive = {
    0: { items: 1 },
    568: { items: 1 },
    1024: { items: 1 },
  };

  const items = [
    <TinyProduct ProductImg="https://cdn.shopify.com/s/files/1/0066/4322/0562/products/GoldPhone_bd50e26e-6236-4648-88db-d0b8a94a1bde_540x.jpg?v=1605600708" />,
    <TinyProduct ProductImg="https://cdn.shopify.com/s/files/1/0066/4322/0562/products/GoldPhone_bd50e26e-6236-4648-88db-d0b8a94a1bde_540x.jpg?v=1605600708" />,
    <TinyProduct ProductImg="https://cdn.shopify.com/s/files/1/0066/4322/0562/products/GoldPhone_bd50e26e-6236-4648-88db-d0b8a94a1bde_540x.jpg?v=1605600708" />,
    <TinyProduct ProductImg="https://cdn.shopify.com/s/files/1/0066/4322/0562/products/GoldPhone_bd50e26e-6236-4648-88db-d0b8a94a1bde_540x.jpg?v=1605600708" />,
    <TinyProduct ProductImg="https://cdn.shopify.com/s/files/1/0066/4322/0562/products/GoldPhone_bd50e26e-6236-4648-88db-d0b8a94a1bde_540x.jpg?v=1605600708" />,
    <TinyProduct ProductImg="https://cdn.shopify.com/s/files/1/0066/4322/0562/products/GoldPhone_bd50e26e-6236-4648-88db-d0b8a94a1bde_540x.jpg?v=1605600708" />,
    <TinyProduct ProductImg="https://cdn.shopify.com/s/files/1/0066/4322/0562/products/GoldPhone_bd50e26e-6236-4648-88db-d0b8a94a1bde_540x.jpg?v=1605600708" />,
    <TinyProduct ProductImg="https://cdn.shopify.com/s/files/1/0066/4322/0562/products/GoldPhone_bd50e26e-6236-4648-88db-d0b8a94a1bde_540x.jpg?v=1605600708" />,
    <TinyProduct ProductImg="https://cdn.shopify.com/s/files/1/0066/4322/0562/products/GoldPhone_bd50e26e-6236-4648-88db-d0b8a94a1bde_540x.jpg?v=1605600708" />,
    <TinyProduct ProductImg="https://cdn.shopify.com/s/files/1/0066/4322/0562/products/GoldPhone_bd50e26e-6236-4648-88db-d0b8a94a1bde_540x.jpg?v=1605600708" />,
    <TinyProduct ProductImg="https://cdn.shopify.com/s/files/1/0066/4322/0562/products/GoldPhone_bd50e26e-6236-4648-88db-d0b8a94a1bde_540x.jpg?v=1605600708" />,
    <TinyProduct ProductImg="https://cdn.shopify.com/s/files/1/0066/4322/0562/products/GoldPhone_bd50e26e-6236-4648-88db-d0b8a94a1bde_540x.jpg?v=1605600708" />,
  ];

  return (
    <div className="categories-page-left-wrapper">
      <div className="title">Categories</div>
      <Accordion>
        <div className="list-item">
          <Accordion.Toggle variant="link" eventKey="0">
            Accessories
            <IoIosArrowForward />
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <ul>
                <li>
                  <Link to="#">Cameras</Link>
                </li>
                <li>
                  <Link to="#">Software</Link>
                </li>
                <li>
                  <Link to="#">Phones & PDAs </Link>
                </li>
                <li>
                  <Link to="#"> MP3 Players</Link>
                </li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </div>

        <div className="list-item">
          <Accordion.Toggle variant="link" eventKey="1">
            All in One
            <IoIosArrowForward />
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <ul>
                <li>
                  <Link to="#">Cameras</Link>
                </li>
                <li>
                  <Link to="#">Software</Link>
                </li>
                <li>
                  <Link to="#">Phones & PDAs </Link>
                </li>
                <li>
                  <Link to="#"> MP3 Players</Link>
                </li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </div>

        <div className="list-item">
          <Accordion.Toggle variant="link" eventKey="2">
            Gadgets
            <IoIosArrowForward />
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              <ul>
                <li>
                  <Link to="#">Cameras</Link>
                </li>
                <li>
                  <Link to="#">Software</Link>
                </li>
                <li>
                  <Link to="#">Phones & PDAs </Link>
                </li>
                <li>
                  <Link to="#"> MP3 Players</Link>
                </li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </div>

        <div className="list-item">
          <Accordion.Toggle variant="link" eventKey="3">
            Gaming
            <IoIosArrowForward />
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="3">
            <Card.Body>
              <ul>
                <li>
                  <Link to="#">Cameras</Link>
                </li>
                <li>
                  <Link to="#">Software</Link>
                </li>
                <li>
                  <Link to="#">Phones & PDAs </Link>
                </li>
                <li>
                  <Link to="#"> MP3 Players</Link>
                </li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </div>

        <div className="list-item">
          <Accordion.Toggle variant="link" eventKey="4">
            Others
            <IoIosArrowForward />
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="4">
            <Card.Body>
              <ul>
                <li>
                  <Link to="#">Cameras</Link>
                </li>
                <li>
                  <Link to="#">Software</Link>
                </li>
                <li>
                  <Link to="#">Phones & PDAs </Link>
                </li>
                <li>
                  <Link to="#"> MP3 Players</Link>
                </li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </div>
      </Accordion>
      <Link to="#" className="list-item">
        MAC Computer
      </Link>
      <Link to="#" className="list-item">
        TV & Audio
      </Link>
      <Link to="#" className="list-item">
        Printers & Ink
      </Link>

      <Link to="/cameras/4k" style={{ marginTop: '30px', display: 'block' }}>
        <img
          src="//cdn.shopify.com/s/files/1/0066/4322/0562/files/sidebar-banner_270x_caf21969-17c3-44e7-a84a-b10fc5e8a4be_1920x.jpg?v=1604560580"
          alt="ad"
          style={{ width: '100%' }}
        />
      </Link>
      <div className="title m-top-20">Latest Products</div>
      <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        disableDotsControls
        autoPlay
        autoPlayInterval={5000}
      />
    </div>
  );
};

export default CategoriesPageLeftSide;
