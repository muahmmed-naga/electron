import React from 'react';

// Components
import { Link } from 'react-router-dom';
import { RiCloseFill } from 'react-icons/ri';

// Styles
import './product-modal.styles.scss';

const ProductModal = () => {
  return (
    <div className="product-modal-wrapper">
      <div className="content">
        <div className="product-image-preview">
          <img
            src="//cdn.shopify.com/s/files/1/0066/4322/0562/products/Printer_495x.jpg"
            alt="product-name"
          />
        </div>
        <div className="about-product">
          <div className="category">Donna Karan</div>
          <Link to="#" className="product-name">
            Faxtex Product Sample
          </Link>
          <div className="price">
            <div className="new">$220.00</div>
            <del>$300.00</del>
          </div>

          <ul>
            <li>Accept SIM card and call</li>
            <li>Take photos</li>
            <li>Make calling instead of mobile phone</li>
            <li>Sync music play and sync control music</li>
            <li>Sync Facebook,Twiter,emailand calendar</li>
          </ul>

          <div className="cart-options">
            <div className="quantity">
              <label>Quantity</label>
              <div className="wrapper">
                <input type="text" value={1} onChange={() => {}} />
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
        <div className="close">
          <RiCloseFill />
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
