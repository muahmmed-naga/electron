import React from 'react';

// Components
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/svg/logo.svg';
import { AiOutlineSearch, AiOutlineHeart } from 'react-icons/ai';
import { IoBagOutline, IoRepeatOutline } from 'react-icons/io5';

// Styles
import './main-header.styles.scss';

const AppMainHeader = () => {
  return (
    <div className="custom-container">
      <div className="app-main-header-wrapper flex-center-between">
        <div className="logo">
          <Logo />
        </div>

        <div className="product-search flex-align-center">
          <input type="text" placeholder="Search..." />
          <div className="search-icon">
            <AiOutlineSearch />
          </div>
        </div>

        <div className="righ-side flex-align-center">
          <Link to="#" className="item">
            <IoRepeatOutline />
            <div className="count">0</div>
          </Link>
          <Link to="#" className="item">
            <AiOutlineHeart />
            <div className="count">0</div>
          </Link>
          <Link to="#" className="item">
            <IoBagOutline />
            <div className="count">0</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AppMainHeader;