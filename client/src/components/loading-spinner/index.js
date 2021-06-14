import React from "react";

// Styles
import "./index.scss";

const LoadingSpinner = () => {
  return (
    <div
      className="loading-spinner-wrapper lds-roller"
      style={{ border: "1px solid red" }}
    >
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default LoadingSpinner;
