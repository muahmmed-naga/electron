import React from "react";

// Styles
import "./index.scss";

const LoginForm = () => {
  return (
    <div className="login-form-wrapper">
      <div className="title">Login</div>

      <form autoComplete="off">
        <label htmlFor="loginEmail">Email Address*</label>
        <input type="email" name="email" id="loginEmail" />

        <label htmlFor="loginPassword">Password*</label>
        <input type="password" name="password" id="loginPassword" />

        <button type="submit" className="cutom-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
