import React from "react";

// Components
import { Link } from "react-router-dom";
import { RiCloseFill } from "react-icons/ri";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Row, Col } from "react-bootstrap";

// Styles
import "./index.scss";

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const ProductModal = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        react-transition-group
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div className="product-modal-wrapper">
              <div className="content">
                <Row>
                  <Col xs={12} md={4} lg={5}>
                    <img
                      src="//cdn.shopify.com/s/files/1/0066/4322/0562/products/Printer_495x.jpg"
                      alt="product-name"
                      style={{ width: "100%", height: "auto" }}
                    />
                    {/* <div className="product-image-preview">
                    </div> */}
                  </Col>
                  <Col xs={12} md={8} lg={7}>
                    <div className="about-product">
                      <div className="category">Donna Karan</div>
                      <Link to="#" className="product-name">
                        Faxtex Product Sample
                      </Link>
                      <div className="price">
                        <div className="new">$220.00</div>
                        <del>$300.00</del>
                      </div>

                      <ul>
                        <li>Accept SIM card and call</li>
                        <li>Take photos</li>
                        <li>Make calling instead of mobile phone</li>
                        <li>Sync music play and sync control music</li>
                        <li>Sync Facebook,Twiter,emailand calendar</li>
                      </ul>

                      <div className="cart-options">
                        <div className="quantity">
                          <label>Quantity</label>
                          <div className="wrapper">
                            <input type="text" value={1} onChange={() => {}} />
                            <div className="btn-wrapper">
                              <button>+</button>
                              <button>-</button>
                            </div>
                          </div>
                        </div>
                        <div className="add-to-cart-btn">
                          <span>Add To Cart</span>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>

                <div className="close" onClick={handleClose}>
                  <RiCloseFill />
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default ProductModal;
