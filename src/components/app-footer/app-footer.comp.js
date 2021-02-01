import React from 'react';

// Components
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { BiMailSend } from 'react-icons/bi';
import { ReactComponent as Logo } from '../../assets/svg/logo.svg';
import { TiSocialFacebook } from 'react-icons/ti';
import { IoLogoTwitter } from 'react-icons/io';
import { AiOutlineInstagram, AiFillYoutube } from 'react-icons/ai';
import { FaPinterestP } from 'react-icons/fa';
import OurParteners from '../our-parteners/our-parteners.comp';

// Styles
import './app-footer.styles.scss';

const AppFooter = () => {
  return (
    <>
      <OurParteners />
      <div className="app-footer-wrapper">
        <div className="custom-container content">
          <div className="news-letter flex-align-center flex-justify-between">
            <div className="left-side flex-align-center">
              <BiMailSend />
              <span>Sign Up to Newsletter</span>
            </div>
            <div className="middle">$20 coupon for first shopping.</div>
            <form>
              <input type="email" name="emai" placeholder="Enter your Email" />
              <button type="submit">subscribe</button>
            </form>
          </div>

          <div className="main-content m-top-15">
            <Row>
              <Col xs={12} sm={6} md={6} lg={3}>
                <Logo />
                <div style={{ fontSize: '.9rem', marginTop: '10px' }}>
                  Got questions? Call us 24/7! <br />{' '}
                  <b style={{ color: '#4a4a4a' }}>(800) 8001-8588, (0600)</b>
                </div>

                <div className="contact-info">
                  <div className="title">Contact Info</div>
                  <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>
                </div>

                <ul className="social-media flex-align-center">
                  <li>
                    <Link to="#">
                      <TiSocialFacebook />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <IoLogoTwitter />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <AiOutlineInstagram />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <FaPinterestP />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <AiFillYoutube />
                    </Link>
                  </li>
                </ul>
              </Col>
              <Col xs={12} sm={6} md={6} lg={3}>
                <div className="column-title">Find in Fast</div>
                <ul className="list">
                  <li>
                    <Link to="#">Accessories</Link>
                  </li>
                  <li>
                    <Link to="#">Gaming</Link>
                  </li>
                  <li>
                    <Link to="#">Laptops & Computer</Link>
                  </li>
                  <li>
                    <Link to="#">Mac Computers</Link>
                  </li>
                  <li>
                    <Link to="#">PC Computers</Link>
                  </li>
                  <li>
                    <Link to="#">Ultrabooks</Link>
                  </li>
                </ul>
              </Col>
              <Col xs={12} sm={6} md={6} lg={3}>
                <div className="column-title">Information</div>
                <ul className="list">
                  <li>
                    <Link to="#">About Us</Link>
                  </li>
                  <li>
                    <Link to="#">Contact Us</Link>
                  </li>
                  <li>
                    <Link to="#">All Collections</Link>
                  </li>
                  <li>
                    <Link to="#">Privacy policy</Link>
                  </li>
                  <li>
                    <Link to="#">Terms & Conditions</Link>
                  </li>
                </ul>
              </Col>
              <Col xs={12} sm={6} md={6} lg={3}>
                <div className="column-title">In the Spotlight</div>
                <ul className="list">
                  <li>
                    <Link to="#">Electronics</Link>
                  </li>
                  <li>
                    <Link to="#">Toys</Link>
                  </li>
                  <li>
                    <Link to="#">Video Games</Link>
                  </li>
                  <li>
                    <Link to="#">Home Products</Link>
                  </li>
                  <li>
                    <Link to="#">Clothing</Link>
                  </li>
                  <li>
                    <Link to="#">Sports & Outdoors</Link>
                  </li>
                </ul>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppFooter;
