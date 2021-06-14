import React from "react";

// Components
import { Link } from "react-router-dom";
import { IoIosCall } from "react-icons/io";
import { IoPersonAddOutline } from "react-icons/io5";
import { GoMail } from "react-icons/go";
import { RiLoginBoxLine } from "react-icons/ri";

// Styles
import "./index.scss";

const AppUpperHeader = () => {
  return (
    <div className="custom-container app-upper-header-wrapper flex-center-between">
      <div className="left-side flex-center-between">
        <div className="item flex-align-center">
          <IoIosCall className="main-color" />
          <p>+201092107785</p>
        </div>

        <div className="item flex-align-center">
          <GoMail className="main-color" />
          <p>muhammad.naga.ali@gmail.com</p>
        </div>
      </div>
      <div className="right-side">
        <div className="flex-align-center">
          <Link to="/account/login" className="item flex-align-center">
            <RiLoginBoxLine className="main-color" />
            <p>Login</p>
          </Link>
          <Link to="/account/signup" className="item flex-align-center">
            <IoPersonAddOutline className="main-color" />
            <p>Register</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AppUpperHeader;
