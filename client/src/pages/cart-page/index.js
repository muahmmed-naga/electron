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

// Styles
import "./index.scss";

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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(
    "Frozen yoghurt",
    159,
    6.0,
    24,
    <VscTrash style={{ fontSize: "1.5rem", color: "red", cursor: "pointer" }} />
  ),
  createData(
    "Ice cream sandwich",
    237,
    9.0,
    37,
    <VscTrash style={{ fontSize: "1.5rem", color: "red", cursor: "pointer" }} />
  ),
  createData(
    "Eclair",
    262,
    16.0,
    24,
    <VscTrash style={{ fontSize: "1.5rem", color: "red", cursor: "pointer" }} />
  ),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const CartPage = () => {
  const classes = useStyles();

  // Handlers functions
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `Electron | Cart Page`;
  });

  return (
    <>
      <div className="custom-container cart-page-wrapper">
        <RouteNavigator current="Your Shopping Cart" />
        <div className="content">
          <div className="title">Shoppong Cart</div>

          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Product</StyledTableCell>
                  <StyledTableCell align="left">Price</StyledTableCell>
                  <StyledTableCell align="left">Quantity</StyledTableCell>
                  <StyledTableCell align="left">Cart Total</StyledTableCell>
                  <StyledTableCell align="left">Actions</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, idx) => (
                  <StyledTableRow key={idx}>
                    <StyledTableCell component="th" scope="row">
                      <AlignTinyProduct imgUrl="https://wpbingosite.com/wordpress/funio/wp-content/uploads/2020/12/Image-12-1020x1020.jpg" />
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      ${row.calories}
                    </StyledTableCell>
                    <StyledTableCell align="left">{row.fat}</StyledTableCell>
                    <StyledTableCell align="left">{row.carbs}</StyledTableCell>
                    <StyledTableCell align="left">
                      {row.protein}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Row>
            <Col xs={12} md={4} lg={4}>
              <div className="cart-total m-top-30">
                <div className="head flex-align-center flex-justify-between">
                  <div className="head-title">Cart Total</div>
                  <div className="total">$3220.00</div>
                </div>
                <Link to="/checkout" className="proceed-to-checkout">
                  Proceed to Checkout
                </Link>
              </div>
            </Col>
            <Col xs={12} md={8} lg={8}>
              <div className="footer">
                <Link to="/categories/all" className="continue-shopping">
                  <span>Continue Shopping</span>
                </Link>
                <div className="add-to-cart-btn">
                  <span>Clear Cart</span>
                </div>
              </div>
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
