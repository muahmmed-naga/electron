import React from 'react';

// Styles
import './login-form.styles.scss';

const LoginForm = () => {
  return (
    <div className="login-form-wrapper">
      <div className="title">Login</div>

      <form autoComplete="off">
        <label htmlFor="email">Email Address*</label>
        <input type="email" name="email" id="email" />

        <label htmlFor="password">Password*</label>
        <input type="password" name="password" id="password" />

        <button type="submit" className="cutom-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
