import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getUserOrderDetails,
  userOrderPayAction,
} from "../redux/actions/orderActions";
import LoadingSpinner from "../components/loading-spinner";
import actionTypes from "../redux/types";
import { PayPalButton } from "react-paypal-button-v2";

const UserOrdersPage = ({
  match: {
    params: { id },
  },
}) => {
  const [sdkReady, setSdkReady] = useState(false);
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const {
    cartItems,
    shippingAddress: { address, city, postalCode, country },
    paymentMethod,
  } = cart;
  const { loading, error, order } = useSelector(state => state.orderDetails);
  const { loading: payLoading, success } = useSelector(
    state => state.orderPayInfo
  );

  const addDecimals = num => Math.round((num * 100) / 100).toFixed(2);
  const taxVal = 0.2;

  cart.itemsPrice = addDecimals(
    cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0)
  );
  cart.shippingPrice = addDecimals(Number(cart.itemsPrice) > 1500 ? 0 : 30);
  cart.taxPrice = addDecimals(Number((taxVal * cart.itemsPrice).toFixed(2)));
  cart.totalPrices =
    Number(cart.itemsPrice) +
    Number(cart.shippingPrice) +
    Number(cart.taxPrice);

  const hanldeSuccessPayment = paymentResult => {
    console.log(paymentResult);
    dispatch(userOrderPayAction(id, paymentResult));
  };

  useEffect(() => {
    const getPaymentMethod = async () => {
      const { data: clientId } = await axios.get("/api/config/paypal");
      const payPalScriptEl = document.createElement("script");
      payPalScriptEl.type = "text/javascript";
      payPalScriptEl.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
      payPalScriptEl.async = true;
      payPalScriptEl.onload = () => {
        setSdkReady(true);
      };

      document.body.appendChild(payPalScriptEl);
    };

    if (!order?.order || success) {
      dispatch({ type: actionTypes.USER_ORDER_PAID_RESET });
      dispatch(getUserOrderDetails(id));
    } else if (!order?.order?.isPaid) {
      if (!window.paypal) {
        getPaymentMethod();
      } else {
        setSdkReady(true);
      }
    }
  }, [dispatch, id, order, success]);

  return (
    <div className="custom-container mt-5">
      {loading ? (
        <LoadingSpinner />
      ) : error ? (
        <div
          className="alert alert-danger mt-3"
          style={{ width: "fit-content" }}
        >
          <b>{error}</b>
        </div>
      ) : (
        <>
          {" "}
          <div className="alert alert-success" style={{ width: "fit-content" }}>
            User order ID: <b>{id}</b>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-8 col-lg-8">
              <h4>Shipping Address</h4>
              <div>
                Address: {address}, {city}, {postalCode}, {country}
              </div>
              {order?.order?.isDeliverd ? (
                <div
                  className="alert alert-success mt-3"
                  style={{ width: "fit-content" }}
                >
                  <b>Delivered succss</b>
                </div>
              ) : (
                <div
                  className="alert alert-danger mt-3"
                  style={{ width: "fit-content" }}
                >
                  <b>Not Delivered Yet</b>
                </div>
              )}
              <hr />
              <h4 className="mt-4">
                Payment Method ({" "}
                <span style={{ color: "#00abc5", fontWeight: "bold" }}>
                  {paymentMethod}
                </span>{" "}
                )
              </h4>
              {order?.order?.isPaid ? (
                <div
                  className="alert alert-success mt-3"
                  style={{ width: "fit-content" }}
                >
                  <b>
                    Paid At: $
                    {moment(order?.paymentMethod).format("DD/MM/YYYY")}
                  </b>
                </div>
              ) : (
                <div
                  className="alert alert-danger mt-3"
                  style={{ width: "fit-content" }}
                >
                  <b>No Paid Yet</b>
                </div>
              )}
              <hr />
              <h4 className="mt-4">Order Items</h4>
              {cartItems.length > 0 &&
                cartItems.map(
                  ({ _id, name, price, quantity, image, category }) => (
                    <div
                      key={_id}
                      className="cart-products d-flex justify-content-between border-bottom pb-3 pt-3"
                    >
                      <div className="product-preview d-flex justify-content-between">
                        <img
                          src={image}
                          alt={name}
                          style={{
                            width: "80px",
                            height: "80px",
                            marginRight: "15px",
                          }}
                        />
                        <div
                          className="d-flex flex-column"
                          style={{ fontSize: ".8rem" }}
                        >
                          <Link
                            to={`/categories/${category
                              .replace(" ", "-")
                              .toLowerCase()}/product/${_id}`}
                          >
                            {name}
                          </Link>
                          <div className="d-flex">
                            <span className="mr-2 font-weight-bold">
                              quantity:
                            </span>
                            <span className="font-weight-bold">
                              {quantity} x ${price} = ${quantity * price}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                )}
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4">
              {error && (
                <div class="alert alert-danger" role="alert">
                  {error}
                </div>
              )}

              {cartItems.length > 0 && (
                <div className="before-checkout">
                  <div className="header">cart totals</div>
                  <div className="body">
                    <div className="total d-flex align-items-center justify-content-between">
                      <span>Items Price Total:</span>
                      <span>${cart.itemsPrice}</span>
                    </div>
                    <div className="total d-flex align-items-center justify-content-between">
                      <span>Shipping:</span>
                      <span>${cart.shippingPrice}</span>
                    </div>
                    <div className="total d-flex align-items-center justify-content-between">
                      <span>Tax:</span>
                      <span>${cart.taxPrice}</span>
                    </div>
                    <div className="total d-flex align-items-center justify-content-between">
                      <span>Total:</span>
                      <span>${cart.totalPrices}</span>
                    </div>
                  </div>
                  {!order?.order?.isPaid && (
                    <div>
                      {payLoading && <LoadingSpinner />}
                      {!sdkReady ? (
                        <LoadingSpinner />
                      ) : (
                        <PayPalButton
                          amount={cart.totalPrices}
                          onSuccess={hanldeSuccessPayment}
                        />
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>{" "}
        </>
      )}
    </div>
  );
};

export default UserOrdersPage;
