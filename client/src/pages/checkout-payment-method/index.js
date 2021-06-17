import { useState } from "react";

// Components
import PaymentStepsBanner from "../../components/payment-steps-banner";
import { useDispatch, useSelector } from "react-redux";

// Styles
import "./index.scss";
import { cartPaymentMethod } from "../../redux/actions/cartActions";

const CheckoutPaymentMethod = ({ history: { push } }) => {
  const { paymentMethod } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const [favPaymentMethod, setFavPaymentMethod] = useState(paymentMethod);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(cartPaymentMethod(favPaymentMethod));
    push("/checkout/placeorder");
  };

  return (
    <div className="custom-container checkout-payment-method-page">
      <PaymentStepsBanner
        prev="Home"
        current="Shipping Info"
        step1
        step2
        step3
        checkoutStepsArr
      />
      <div className="title">Please, Select your favorite payment menthod</div>
      <form onSubmit={handleSubmit}>
        <div className="payment-method-wrapper">
          <div
            className="box"
            style={{
              border: `3px solid ${
                favPaymentMethod === "PayPal" ? "#00abc5" : "#d4d4d4"
              }`,
              backgroundImage: `url("https://www.nopcommerce.com/images/thumbs/0014244_paypal-smart-payment-buttons.png")`,
              width: "300px",
              height: "200px",
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
            onClick={() => setFavPaymentMethod("PayPal")}
          />
          <div
            className="box"
            style={{
              border: `3px solid ${
                favPaymentMethod === "Stripe" ? "#00abc5" : "#d4d4d4"
              }`,
              backgroundImage: `url("https://www.cvent.com/sites/default/files/styles/max_560w/public/image/2019-01/stripe-logo_0.jpg?itok=sGGPeneO")`,
              width: "300px",
              height: "200px",
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
            onClick={() => setFavPaymentMethod("Stripe")}
          />
        </div>
        <button type="submit" className="custom-button text-uppercase">
          continue
        </button>
      </form>
    </div>
  );
};

export default CheckoutPaymentMethod;
