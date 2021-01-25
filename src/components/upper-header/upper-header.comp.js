import React from 'react';

// Components
import { Link } from 'react-router-dom';
import { IoIosCall } from 'react-icons/io';
import { IoPersonAddOutline } from 'react-icons/io5';
import { GoMail } from 'react-icons/go';
import { MdLocalShipping } from 'react-icons/md';
import { GoLocation } from 'react-icons/go';
import { RiLoginBoxLine } from 'react-icons/ri';

// Styles
import './upper-header.styles.scss';

const AppUpperHeader = () => {
  return (
    <div className="app-upper-header-wrapper flex-center-between">
      <div className="left-side flex-center-between">
        <div className="item flex-align-center">
          <IoIosCall className="main-color" />
          <p>(+800) 123 456 7890</p>
        </div>

        <div className="item flex-align-center">
          <GoMail className="main-color" />
          <p>muhammed.ali.naga@gmail.com</p>
        </div>
      </div>
      <div className="right-side">
        <div className="flex-align-center">
          <Link to="#" className="item flex-align-center">
            <GoLocation className="main-color" />
            <p>Store Location</p>
          </Link>
          <Link to="#" className="item flex-align-center">
            <MdLocalShipping className="main-color" />
            <p>Track Your Order</p>
          </Link>
        </div>

        <div className="flex-align-center">
          <Link to="#" className="item flex-align-center">
            <RiLoginBoxLine className="main-color" />
            <p>Login</p>
          </Link>
          <Link to="#" className="item flex-align-center">
            <IoPersonAddOutline className="main-color" />
            <p>Register</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AppUpperHeader;
