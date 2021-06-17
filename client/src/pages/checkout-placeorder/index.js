import PaymentStepsBanner from "../../components/payment-steps-banner";

const CheckoutPlaceOrder = () => {
  return (
    <div className="custom-container">
      <PaymentStepsBanner step1 step2 step3 step4 checkoutStepsArr />
      <div>Checkout place order</div>
    </div>
  );
};

export default CheckoutPlaceOrder;
