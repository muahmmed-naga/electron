import React from "react";

// Components
import { Link, NavLink } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";

// Styles
import "./index.scss";

const MainNavigator = () => {
  return (
    <ul className="main-navigator-wrapper flex-align-center">
      <li>
        <NavLink to="/" exact activeClassName="active-link">
          Home
        </NavLink>
      </li>
      <li className="categories-menu">
        <NavLink to="/products/all" activeClassName="active-link">
          Products
        </NavLink>
        <MdKeyboardArrowDown />

        <ul className="categories-submenu">
          <div className="custom-row">
            <div className="column">
              <div className="title">single product pages</div>
              <ul>
                <li>
                  <Link to="#">single product sidebar</Link>
                </li>
                <li>
                  <Link to="#">single product full</Link>
                </li>
                <li>
                  <Link to="#">group product</Link>
                </li>
                <li>
                  <Link to="#">product redirect</Link>
                </li>
                <li>
                  <Link to="#">product re-order</Link>
                </li>
                <li>
                  <Link to="#">discount popup product</Link>
                </li>
              </ul>
            </div>

            <div className="column">
              <div className="title">shop pages</div>
              <ul>
                <li>
                  <Link to="#">shop left sidebar</Link>
                </li>
                <li>
                  <Link to="#">shop right sidebar</Link>
                </li>
                <li>
                  <Link to="#">shop full width</Link>
                </li>
                <li>
                  <Link to="#">shop sub collection</Link>
                </li>
                <li>
                  <Link to="#">colletion infinite load</Link>
                </li>
              </ul>
            </div>

            <div className="column">
              <div className="title">ecommerce page</div>
              <ul>
                <li>
                  <Link to="#">shop</Link>
                </li>
                <li>
                  <Link to="#">about us</Link>
                </li>
                <li>
                  <Link to="#">shipping & return</Link>
                </li>
                <li>
                  <Link to="#">FAQs</Link>
                </li>
              </ul>
            </div>

            <div className="column">
              <div className="title">blog</div>
              <ul>
                <li>
                  <Link to="#">blog 01</Link>
                </li>
                <li>
                  <Link to="#">blog 02</Link>
                </li>
                <li>
                  <Link to="#">blog 03</Link>
                </li>
              </ul>
            </div>
          </div>
        </ul>
      </li>
      <li>
        <NavLink to="#" activeClassName="active-link">
          <span style={{ color: "#333e48" }}>Pages</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="#" activeClassName="active-link">
          <span style={{ color: "#333e48" }}>Features</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="#" activeClassName="active-link">
          <span style={{ color: "#333e48" }}>Gift Cards</span>
        </NavLink>
      </li>
    </ul>
  );
};

export default MainNavigator;
