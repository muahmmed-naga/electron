import React, { useEffect } from "react";

// Components
import { Link } from "react-router-dom";
import { VscTrash } from "react-icons/vsc";
import Table from "@material-ui/core/Table";
import Paper from "@material-ui/core/Paper";
import { Row, Col } from "react-bootstrap";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableContainer from "@material-ui/core/TableContainer";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import RouteNavigator from "../../components/route-navigator";
import AlignTinyProduct from "../../components/align-tiny-product";
import NewArrivals from "../../components/new-arrivals/";
import ProductsMultiColumns from "../../components/products-multi-colums";
import { useSelector, useDispatch } from "react-redux";

// Styles
import "./index.scss";
import {
  addItemToCart,
  clearItemFromCart,
  descreaseItemQty,
  removeAllItemFromCart,
} from "../../redux/actions/cartActions";

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: "transparent",
    color: "#868484",
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: "#fff",
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const CartPage = () => {
  const classes = useStyles();

  const { cartItems } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  // Handlers functions
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `Electron | Cart Page`;
  }, []);

  return (
    <>
      <div className="custom-container cart-page-wrapper">
        <RouteNavigator current="Your Shopping Cart" />
        <div className="content">
          <div className="title">Shopping Cart</div>

          {cartItems?.length === 0 ? (
            <h4>
              Your cart is Empty now{" "}
              <Link to="/products/all">Continue Shopping</Link>{" "}
            </h4>
          ) : (
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Product</StyledTableCell>
                    <StyledTableCell align="left">Price</StyledTableCell>
                    <StyledTableCell align="left">Quantity</StyledTableCell>
                    <StyledTableCell align="left">Item Total</StyledTableCell>
                    <StyledTableCell align="left">Actions</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cartItems?.map(item => (
                    <StyledTableRow key={item?._id}>
                      <StyledTableCell component="th" scope="row">
                        <AlignTinyProduct
                          _id={item?._id}
                          name={item?.name}
                          image={item?.image}
                          price={item?.price}
                          category={item?.category}
                        />
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        ${item?.price}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        <div className="d-flex align-items-center">
                          <div
                            className="arrow-left"
                            onClick={() => dispatch(addItemToCart(item))}
                          >
                            &#10094;
                          </div>
                          <span>{item?.quantity}</span>
                          <div
                            className="arrow-right"
                            onClick={() => dispatch(descreaseItemQty(item))}
                          >
                            &#10095;
                          </div>
                        </div>
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        ${item?.price * item?.quantity}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        <VscTrash
                          onClick={() => dispatch(clearItemFromCart(item?._id))}
                          style={{
                            color: "red",
                            fontSize: 25,
                            cursor: "pointer",
                          }}
                        />
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}

          <Row>
            <Col xs={12} md={4} lg={4}>
              {cartItems?.length !== 0 && (
                <div className="cart-total m-top-30">
                  <div className="head flex-align-center flex-justify-between">
                    <div className="head-title">Cart Total</div>
                    <div className="total">$3220.00</div>
                  </div>
                  <Link to="/shipping-info" className="proceed-to-checkout">
                    Proceed to Checkout
                  </Link>
                </div>
              )}
            </Col>
            <Col xs={12} md={8} lg={8}>
              {cartItems?.length !== 0 && (
                <div className="footer">
                  <Link to="/products/all" className="continue-shopping">
                    <span>Continue Shopping</span>
                  </Link>
                  <div
                    className="add-to-cart-btn"
                    onClick={() => dispatch(removeAllItemFromCart())}
                  >
                    <span>Clear Cart</span>
                  </div>
                </div>
              )}
            </Col>
          </Row>
        </div>
      </div>

      <NewArrivals />
      <ProductsMultiColumns />
    </>
  );
};

export default CartPage;
