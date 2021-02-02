import React from 'react';

// Styles
import './signup-form.styles.scss';

const SignupForm = () => {
  return (
    <div className="signup-form-wrapper">
      <div className="title">Create New Account</div>

      <form autoComplete="off">
        <label htmlFor="firstName">First Name</label>
        <input type="text" name="firstName" id="firstName" />

        <label htmlFor="lastName">Last Name</label>
        <input type="text" name="lastName" id="lastName" />

        <label htmlFor="email">Email Address*</label>
        <input type="email" name="email" id="email" />

        <label htmlFor="password">Password*</label>
        <input type="password" name="password" id="password" />

        <button type="submit" className="cutom-button">
          Register
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
