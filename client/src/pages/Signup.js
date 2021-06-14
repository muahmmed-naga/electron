import React, { useEffect } from "react";

// Components
import { Row, Col } from "react-bootstrap";
import LoginForm from "../components/lognin-form";
import SignupForm from "../components/signup-form";

const Signup = () => {
  // Handlers functions
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `Electron | User Sign Up Page`;
  });

  return (
    <div className="custom-container">
      <Row>
        <Col xm={12} sm={12} md={6} lg={6}>
          <SignupForm />
        </Col>
        <div className="sperator"></div>
        <Col xm={12} sm={12} md={6} lg={6}>
          <LoginForm />
        </Col>
      </Row>
    </div>
  );
};

export default Signup;
