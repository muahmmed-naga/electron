import React from 'react';

// Components
import { Link } from 'react-router-dom';
import { IoEyeOutline } from 'react-icons/io5';
import { IoMdHeartEmpty } from 'react-icons/io';
import ProductImg from '../../assets/images/products/product-1.jpg';

// Styles
import './tiny-product.styles.scss';

const TinyProduct = () => {
  return (
    <div className="tiny-product-wrapper">
      <div className="category">Donna Karan</div>
      <Link to="#" className="product-name">
        Faxtex Product Sample
      </Link>
      <Link to="#" className="img-wrapper">
        <img src={ProductImg} alt="product" />
      </Link>

      <div className="price">
        <div className="new">$220.00</div>
        <del>$300.00</del>
      </div>

      <div className="options flex-align-center">
        <div className="view flex-align-center">
          <IoEyeOutline />
          <span>view</span>
        </div>
        <div className="wishlist flex-align-center">
          <IoMdHeartEmpty />
          <span>wishlist</span>
        </div>
      </div>
    </div>
  );
};

export default TinyProduct;
