// Components
import { Link } from "react-router-dom";
import { IoIosCall } from "react-icons/io";
import { IoPersonAddOutline } from "react-icons/io5";
import { GoMail } from "react-icons/go";
import { RiLoginBoxLine } from "react-icons/ri";
import { ImUserCheck } from "react-icons/im";
import { useSelector } from "react-redux";

// Styles
import "./index.scss";

const AppUpperHeader = () => {
  const { userInfo } = useSelector(state => state.user);

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
      {!userInfo?.name && (
        <div className="right-side">
          <div className="flex-align-center">
            <Link to="/user/login" className="item flex-align-center">
              <RiLoginBoxLine className="main-color" />
              <p>Login</p>
            </Link>
            <Link to="/user/signup" className="item flex-align-center">
              <IoPersonAddOutline className="main-color" />
              <p>Register</p>
            </Link>
          </div>
        </div>
      )}
      {userInfo?.name && (
        <div className="user-dropdown">
          <Link
            to="/user/profile"
            className="item flex-align-center"
            style={{ fontSize: "1.5rem" }}
          >
            <ImUserCheck className="main-color" />
          </Link>
        </div>
      )}
    </div>
  );
};

export default AppUpperHeader;
