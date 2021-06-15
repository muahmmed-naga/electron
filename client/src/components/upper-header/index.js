// Components
import { Link } from "react-router-dom";
import { IoIosCall } from "react-icons/io";
import { IoPersonAddOutline } from "react-icons/io5";
import { GoMail } from "react-icons/go";
import { RiLoginBoxLine } from "react-icons/ri";
import { Dropdown } from "react-bootstrap";

// Styles
import "./index.scss";
import { useSelector, useDispatch } from "react-redux";
import { userLogout } from "../../redux/actions/userActions";

const AppUpperHeader = () => {
  const { userInfo } = useSelector(state => state.user);
  const dispatch = useDispatch();

  const userLogoutHandler = () => {
    dispatch(userLogout());
  };

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
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {userInfo?.name.substring(0, 10) + "..."}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Link
                to="/user/profile"
                style={{
                  color: "#000",
                  margin: "10px 15px",
                  cursor: "pointer",
                }}
              >
                My Profile
              </Link>
              <div
                style={{
                  color: "#000",
                  margin: "10px 15px",
                  cursor: "pointer",
                }}
                onClick={userLogoutHandler}
              >
                Logout
              </div>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      )}
    </div>
  );
};

export default AppUpperHeader;
