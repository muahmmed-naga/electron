import React from "react";

// Styles
import "./index.scss";

const SignupForm = () => {
  return (
    <div className="signup-form-wrapper">
      <div className="title">Create New Account</div>

      <form autoComplete="off">
        <label htmlFor="signupFirstName">First Name</label>
        <input type="text" name="firstName" id="signupFirstName" />

        <label htmlFor="signupLastName">Last Name</label>
        <input type="text" name="lastName" id="signupLastName" />

        <label htmlFor="signupEmail">Email Address*</label>
        <input type="email" name="email" id="signupEmail" />

        <label htmlFor="signupPassword">Password*</label>
        <input type="password" name="password" id="signupPassword" />

        <button type="submit" className="cutom-button">
          Register
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
