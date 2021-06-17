import React, { Fragment } from "react";
// Components
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

// Styles
import "./index.scss";

const PaymentStepsBanner = ({
  title,
  prev,
  current,
  checkoutStepsArr,
  step1,
  step2,
  step3,
  step4,
}) => {
  return (
    <div className="page-banner-container">
      <h3>{title}</h3>

      {!checkoutStepsArr && (
        <div className="navigator">
          <Link to={`/${prev === "home" && ""}`}>{prev}</Link>
          <IoIosArrowForward style={{ color: "#00abc5" }} />
          <div className="current">{current}</div>
        </div>
      )}

      {checkoutStepsArr && (
        <div className="checkout-steps">
          {step1 ? (
            <>
              <Link to="/user/login" className="step-item">
                Sing In
              </Link>
              <IoIosArrowForward style={{ color: "#00abc5" }} />
            </>
          ) : (
            <>
              <div className="not-allowed-link">Sign In</div>
            </>
          )}
          {step2 ? (
            <>
              <Link to="/shipping-info" className="step-item">
                Shipping Info
              </Link>
              <IoIosArrowForward style={{ color: "#00abc5" }} />
            </>
          ) : (
            <>
              <div className="not-allowed-link">Shipping Info</div>
              <IoIosArrowForward style={{ color: "#00abc5" }} />
            </>
          )}
          {step3 ? (
            <>
              <Link to="/checkout/payment-method" className="step-item">
                Payment Method
              </Link>
              <IoIosArrowForward style={{ color: "#00abc5" }} />
            </>
          ) : (
            <>
              <div className="not-allowed-link">Payment Method</div>
              <IoIosArrowForward style={{ color: "#00abc5" }} />
            </>
          )}
          {step4 ? (
            <>
              <Link to="/checkout/placeorder" className="step-item">
                Place Order
              </Link>
            </>
          ) : (
            <>
              <div className="not-allowed-link">Place Order</div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default PaymentStepsBanner;
