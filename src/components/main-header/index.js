import React from "react";

// Components
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { IoBagOutline } from "react-icons/io5";

// Styles
import "./index.scss";

const AppMainHeader = () => {
  return (
    <div className="custom-container">
      <div className="app-main-header-wrapper flex-center-between">
        <Link
          to="/"
          className="logo"
          style={{ color: "#00abc5", fontWeight: "bold" }}
        >
          <h4>Electron</h4>
        </Link>

        <div className="product-search flex-align-center">
          <input type="text" placeholder="Search..." />
          <div className="search-icon">
            <AiOutlineSearch />
          </div>
        </div>

        <div className="righ-side flex-align-center">
          <Link to="/cart" className="item">
            <IoBagOutline />
            <div className="count">0</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AppMainHeader;
