import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Components
import { Link } from 'react-router-dom';
import AliceCarousel from 'react-alice-carousel';
import { AiOutlineStar } from 'react-icons/ai';
import { IoIosArrowForward } from 'react-icons/io';
import ProdductDescriptioTabs from './utils/tabs.comp';
import { Accordion, Card, Row, Col } from 'react-bootstrap';
import NEW_ARRIVALS from '../../components/new-arrivals/data';
import TinyProduct from '../../components/tiny-product/tiny-product.comp';
import RouteNavigator from '../../components/route-navigator/route-navigator.comp';
import LoadingSpinner from '../../components/loading-spinner/loading-spinner.comp';
import ProductsMultiColumns from '../../components/products-multi-colums/products-multi-colums.comp';

// Styles
import 'react-alice-carousel/lib/alice-carousel.css';
import './categories-cameras.styles.scss';

const CategoriesCameras = ({ match }) => {
  const { params } = match;

  const [isLoading, setIsLoading] = useState(false);
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState(null);
  const [category, setCategory] = useState('');
  const [productImg, setProductImg] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `Electron | Cameras | Product ${params.id} Page`;

    setIsLoading(true);
    axios.get(`/api/v1/categories/cameras/product/${params.id}`).then((res) => {
      const { name, img, price, category } = res.data.data.product;

      setProductName(name);
      setPrice(price);
      setCategory(category);
      setProductImg(img);
    });
    setTimeout(() => setIsLoading(false), 500);
  }, [params.id]);

  // eslint-disable-next-line
  const [count, setCount] = useState(1);

  // Product image gallery
  const responsive = {
    0: { items: 1 },
    568: { items: 1 },
    1024: { items: 1 },
  };

  const items = NEW_ARRIVALS.map((item) => (
    <TinyProduct key={item.id} {...item} />
  ));

  return (
    <>
      <div className="custom-container categpries-cameras-page-wrapper">
        <RouteNavigator prev="Accessories" current="Faxtex Product Sample" />
        <div className="content-wrapper">
          <Row>
            <Col xs={12} md={3} lg={3}>
              <div className="left-side">
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
                </Accordion>
              </div>
              <Link
                to="/cameras/4k"
                style={{ marginTop: '30px', display: 'block' }}
              >
                <img
                  src="//cdn.shopify.com/s/files/1/0066/4322/0562/files/sidebar-banner_270x_caf21969-17c3-44e7-a84a-b10fc5e8a4be_1920x.jpg?v=1604560580"
                  alt="ad"
                  style={{ width: '100%' }}
                />
              </Link>
              <div className="latest-products m-top-20">Latest Products</div>
              <AliceCarousel
                mouseTracking
                items={items}
                responsive={responsive}
                disableDotsControls
                autoPlay
                autoPlayInterval={5000}
              />
            </Col>

            <Col xs={12} md={9} lg={9}>
              <Row>
                <Col
                  xs={12}
                  md={4}
                  lg={6}
                  style={{ display: 'flex', alignItems: 'center' }}
                >
                  {isLoading ? (
                    <LoadingSpinner />
                  ) : (
                    <div className="preview-products-images">
                      <img
                        src={productImg}
                        alt={productName}
                        style={{ width: '100%' }}
                      />
                    </div>
                  )}
                </Col>
                <Col xs={12} md={8} lg={6}>
                  <div className="upper">
                    <div className="category">{category}</div>
                    <div className="product-name">{productName}</div>
                    <div className="rating flex-align-center">
                      <div className="stars">
                        <AiOutlineStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                      </div>
                      <div className="reviews">(No reviews)</div>
                      <div className="add-review">(Add your review)</div>
                    </div>
                  </div>

                  <ul className="products-features">
                    <li>Accept SIM card and call</li>
                    <li>Take photos</li>
                    <li>Make calling instead of mobile phone</li>
                    <li>Sync music play and sync control music</li>
                    <li>Sync Facebook,Twiter,emailand calendar</li>
                  </ul>

                  <ul className="about-product">
                    <li>
                      <div>Products SKU: 4827521</div>
                      <div>
                        Category: <Link to="#">Accessories</Link>{' '}
                      </div>
                    </li>
                  </ul>

                  <div className="price">
                    <div className="new">${price}</div>
                    <del>$300.00</del>
                  </div>

                  <div className="product-options">
                    <div className="sizes">
                      <span className="title">Size:</span>
                      <div className="avilable-sizes">
                        <div className="m active">M</div>
                        <div className="l">L</div>
                        <div className="x">X</div>
                        <div className="xl">XL</div>
                      </div>
                    </div>

                    <div className="cart-options">
                      <div className="quantity">
                        <label>Quantity</label>
                        <div className="wrapper">
                          <input
                            type="text"
                            value={count}
                            onChange={() => {}}
                          />
                          <div className="btn-wrapper">
                            <button>+</button>
                            <button>-</button>
                          </div>
                        </div>
                      </div>
                      <div className="add-to-cart-btn">
                        <span>Add To Cart</span>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <ProdductDescriptioTabs />
            </Col>
          </Row>
        </div>
      </div>
      <ProductsMultiColumns />
    </>
  );
};

export default CategoriesCameras;
