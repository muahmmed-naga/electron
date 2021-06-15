import { useEffect } from "react";

// Components
import { Link } from "react-router-dom";

const LoginPage = () => {
  // Handlers functions
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `Electron | User Login Page`;
  });

  return (
    <div className="custom-container">
      <div className="login-form-wrapper">
        <div className="title">Login</div>

        <form autoComplete="off">
          <label htmlFor="loginEmail">Email Address*</label>
          <input type="email" name="email" id="loginEmail" required />

          <label htmlFor="loginPassword">Password*</label>
          <input type="password" name="password" id="loginPassword" required />

          <button type="submit" className="cutom-button">
            Login
          </button>

          <div className="not-have-already-account">
            Don't have account?,
            <Link to="/user/signup">Register Now</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
