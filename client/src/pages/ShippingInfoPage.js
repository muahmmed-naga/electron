import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import PaymentStepsBanner from "../components/payment-steps-banner";
import { cartSaveShippingAddress } from "../redux/actions/cartActions";

const ShippingPage = ({ history: { push } }) => {
  const { shippingAddress } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const [address, setAddress] = useState(shippingAddress?.address);
  const [city, setCity] = useState(shippingAddress?.city);
  const [country, setCountry] = useState(shippingAddress?.country);
  const [postalCode, setPostalCode] = useState(shippingAddress?.postalCode);

  const submitHandler = e => {
    e.preventDefault();

    dispatch(cartSaveShippingAddress({ address, city, country, postalCode }));

    push("/payment");
  };

  return (
    <div className="custom-container">
      <PaymentStepsBanner
        prev="Home"
        current="Shipping Info"
        step1
        step2
        step3
        checkoutStepsArr
      />
      <div className="signup-form-wrapper">
        <div className="title">Shipping Address Info</div>

        <form autoComplete="off" onSubmit={submitHandler}>
          <label htmlFor="address">Shipping Address</label>
          <input
            style={{
              border: `1px solid #d0d0d0`,
            }}
            type="text"
            name="address"
            id="address"
            required
            value={address}
            onChange={e => setAddress(e.target.value)}
          />

          <label htmlFor="city">City</label>
          <input
            style={{
              border: `1px solid #d0d0d0`,
            }}
            type="text"
            name="city"
            id="city"
            required
            value={city}
            onChange={e => setCity(e.target.value)}
          />
          <label htmlFor="country">Country</label>
          <input
            style={{
              border: `1px solid #d0d0d0`,
            }}
            type="text"
            name="country"
            id="country"
            required
            value={country}
            onChange={e => setCountry(e.target.value)}
          />

          <label htmlFor="postalCode">Postal Code</label>
          <input
            style={{
              border: `1px solid #d0d0d0`,
            }}
            type="text"
            name="postalCode"
            id="postalCode"
            required
            value={postalCode}
            onChange={e => setPostalCode(e.target.value)}
          />

          <button type="submit" className="custom-button text-uppercase">
            continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default ShippingPage;
