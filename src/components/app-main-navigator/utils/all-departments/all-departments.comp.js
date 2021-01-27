import React from 'react';

// Components
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { MdKeyboardArrowRight } from 'react-icons/md';

// Styles
import './all-departments.styles.scss';

const AllDepartments = () => {
  return (
    <div className="all-departments-wrapper">
      <div className="header flex-align-center">
        <FaBars className="m-right-10" />
        <div className="title">all departments</div>
      </div>
      <ul className="slide-menu">
        <li className="tv-audio-menu">
          <Link to="#">tv & audio</Link>
          <MdKeyboardArrowRight />
          <ul className="tv-audio-submenu">
            <div className="custom-row">
              <div className="column">
                <div className="title">watches</div>
                <ul>
                  <li>
                    <Link to="#">all watches</Link>
                  </li>
                  <li>
                    <Link to="#">men's watches</Link>
                  </li>
                  <li>
                    <Link to="#">womens's watches</Link>
                  </li>
                  <li>
                    <Link to="#">kid's watches</Link>
                  </li>
                  <li>
                    <Link to="#">premium watches</Link>
                  </li>
                </ul>
              </div>

              <div className="column">
                <div className="title">audio & video</div>
                <ul>
                  <li>
                    <Link to="#">all cameras & photography</Link>
                  </li>
                  <li>
                    <Link to="#">camera accessories</Link>
                  </li>
                  <li>
                    <Link to="#">digital SLRs</Link>
                  </li>
                  <li>
                    <Link to="#">security & surveillance</Link>
                  </li>
                  <li>
                    <Link to="#">binoculars & telescopes</Link>
                  </li>
                  <li>
                    <Link to="#">camcorder</Link>
                  </li>
                </ul>
              </div>

              <div className="column">
                <div className="title">laptops</div>
                <ul>
                  <li>
                    <Link to="#">toshiba</Link>
                  </li>
                  <li>
                    <Link to="#">samsung</Link>
                  </li>
                  <li>
                    <Link to="#">lenovo</Link>
                  </li>
                  <li>
                    <Link to="#">dell</Link>
                  </li>
                  <li>
                    <Link to="#">apple</Link>
                  </li>
                </ul>
              </div>
            </div>
          </ul>
          {/** End Audio & TV submenu */}
        </li>
        <li className="gadgets-menu">
          <Link to="#">gadgets</Link>
          <MdKeyboardArrowRight />

          <ul className="gadgets-submenu">
            <div className="custom-row">
              <div className="column">
                <div className="title">watches</div>
                <ul>
                  <li>
                    <Link to="#">all watches</Link>
                  </li>
                  <li>
                    <Link to="#">men's watches</Link>
                  </li>
                  <li>
                    <Link to="#">womens's watches</Link>
                  </li>
                  <li>
                    <Link to="#">kid's watches</Link>
                  </li>
                  <li>
                    <Link to="#">premium watches</Link>
                  </li>
                </ul>
              </div>

              <div className="column">
                <div className="title">Industrial Supplies</div>
                <ul>
                  <li>
                    <Link to="#">Lab & Scientific</Link>
                  </li>
                  <li>
                    <Link to="#">All Industrial Supplies</Link>
                  </li>
                </ul>
              </div>
              {/*  End Gadgets submenu */}
            </div>
          </ul>
        </li>
        <li className="all-in-one">
          <Link to="#">all in one</Link>
          <MdKeyboardArrowRight />

          <ul className="all-in-one-submenu">
            <div className="custom-row">
              <div className="column">
                <div className="title">watches</div>
                <ul>
                  <li>
                    <Link to="#">all watches</Link>
                  </li>
                  <li>
                    <Link to="#">men's watches</Link>
                  </li>
                  <li>
                    <Link to="#">womens's watches</Link>
                  </li>
                  <li>
                    <Link to="#">kid's watches</Link>
                  </li>
                  <li>
                    <Link to="#">premium watches</Link>
                  </li>
                </ul>
              </div>

              <div className="column">
                <div className="title">audio & video</div>
                <ul>
                  <li>
                    <Link to="#">all cameras & photography</Link>
                  </li>
                  <li>
                    <Link to="#">camera accessories</Link>
                  </li>
                  <li>
                    <Link to="#">digital SLRs</Link>
                  </li>
                  <li>
                    <Link to="#">security & surveillance</Link>
                  </li>
                  <li>
                    <Link to="#">binoculars & telescopes</Link>
                  </li>
                  <li>
                    <Link to="#">camcorder</Link>
                  </li>
                </ul>
              </div>

              <div className="column">
                <div className="title">laptops</div>
                <ul>
                  <li>
                    <Link to="#">toshiba</Link>
                  </li>
                  <li>
                    <Link to="#">samsung</Link>
                  </li>
                  <li>
                    <Link to="#">lenovo</Link>
                  </li>
                  <li>
                    <Link to="#">dell</Link>
                  </li>
                  <li>
                    <Link to="#">apple</Link>
                  </li>
                </ul>
              </div>
            </div>
          </ul>
          {/** End All in One submenu */}
        </li>
        <li className="accessories-menu">
          <Link to="#">accessories</Link>
          <MdKeyboardArrowRight />

          <ul className="accessories-submenu">
            <div className="custom-row">
              <div className="column">
                <div className="title">watches</div>
                <ul>
                  <li>
                    <Link to="#">all watches</Link>
                  </li>
                  <li>
                    <Link to="#">men's watches</Link>
                  </li>
                  <li>
                    <Link to="#">womens's watches</Link>
                  </li>
                  <li>
                    <Link to="#">kid's watches</Link>
                  </li>
                  <li>
                    <Link to="#">premium watches</Link>
                  </li>
                </ul>
              </div>

              <div className="column">
                <div className="title">Industrial Supplies</div>
                <ul>
                  <li>
                    <Link to="#">Lab & Scientific</Link>
                  </li>
                  <li>
                    <Link to="#">All Industrial Supplies</Link>
                  </li>
                </ul>
              </div>
              {/*  Accessories submenu */}
            </div>
          </ul>
        </li>
        <li className="gaming-menu">
          <Link to="#">gaming</Link>
          <MdKeyboardArrowRight />

          <ul className="gaming-submenu">
            <div className="custom-row">
              <div className="column">
                <div className="title">watches</div>
                <ul>
                  <li>
                    <Link to="#">all watches</Link>
                  </li>
                  <li>
                    <Link to="#">men's watches</Link>
                  </li>
                  <li>
                    <Link to="#">womens's watches</Link>
                  </li>
                  <li>
                    <Link to="#">kid's watches</Link>
                  </li>
                  <li>
                    <Link to="#">premium watches</Link>
                  </li>
                </ul>
              </div>

              <div className="column">
                <div className="title">Industrial Supplies</div>
                <ul>
                  <li>
                    <Link to="#">Lab & Scientific</Link>
                  </li>
                  <li>
                    <Link to="#">All Industrial Supplies</Link>
                  </li>
                </ul>
              </div>
              {/*  Gaming submenu */}
            </div>
          </ul>
        </li>
        <li className="laptop-computer-menu">
          <Link to="#">laptop & computer</Link>
          <MdKeyboardArrowRight />

          <ul className="laptop-computer-submenu">
            <div className="custom-row">
              <div className="column">
                <div className="title">watches</div>
                <ul>
                  <li>
                    <Link to="#">all watches</Link>
                  </li>
                  <li>
                    <Link to="#">men's watches</Link>
                  </li>
                  <li>
                    <Link to="#">womens's watches</Link>
                  </li>
                  <li>
                    <Link to="#">kid's watches</Link>
                  </li>
                  <li>
                    <Link to="#">premium watches</Link>
                  </li>
                </ul>
              </div>

              <div className="column">
                <div className="title">Industrial Supplies</div>
                <ul>
                  <li>
                    <Link to="#">Lab & Scientific</Link>
                  </li>
                  <li>
                    <Link to="#">All Industrial Supplies</Link>
                  </li>
                </ul>
              </div>
              {/*  Labtop submenu */}
            </div>
          </ul>
        </li>
        <li>
          <Link to="#">mac computer</Link>
        </li>
        <li>
          <Link to="#">ultrabooks</Link>
        </li>
      </ul>
    </div>
  );
};

export default AllDepartments;
