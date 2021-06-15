import { useEffect } from "react";
import { Link } from "react-router-dom";

const UserSignUp = () => {
  // Handlers functions
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `Electron | User Sign Up Page`;
  });

  return (
    <div className="custom-container">
      <div className="signup-form-wrapper">
        <div className="title">Create New Account</div>

        <form autoComplete="off">
          <label htmlFor="signupFirstName">First Name</label>
          <input type="text" name="firstName" id="signupFirstName" required />

          <label htmlFor="signupLastName">Last Name</label>
          <input type="text" name="lastName" id="signupLastName" required />

          <label htmlFor="signupEmail">Email Address*</label>
          <input type="email" name="email" id="signupEmail" required />

          <label htmlFor="signupPassword">Password*</label>
          <input type="password" name="password" id="signupPassword" required />

          <button type="submit" className="cutom-button">
            Register
          </button>

          <div className="have-already-account">
            Have account?,
            <Link to="/user/login">Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserSignUp;
