import React from "react";

// Components
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/svg/logo.svg";
import { AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";
import { IoBagOutline, IoRepeatOutline } from "react-icons/io5";

// Styles
import "./index.scss";

const ScrollHeader = () => {
  return (
    <div className="custom-container">
      <div
        className="scroll-header-wrapper flex-center-between"
        id="scroll-header"
      >
        <Link to="/" className="logo">
          <Logo />
        </Link>

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
          <Link to="/cart" className="item">
            <IoBagOutline />
            <div className="count">0</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ScrollHeader;
