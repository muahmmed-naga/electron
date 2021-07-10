import { useEffect } from "react";

// Components
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { IoEyeOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { fetchAllProducts } from "../../../../redux/actions/productActions";
import LoadingSpinner from "../../../loading-spinner";

const CategoiresPageMainContent = () => {
  const {
    loading,
    data: { products },
    error,
  } = useSelector(state => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts("/api/v1/products"));
  }, [dispatch]);

  return (
    <div className="categories-main-content-wrapper m-top-30">
      <Row className="Hello">
        {loading && <LoadingSpinner />}
        {error && <h3>{error}</h3>}
        {!loading &&
          !error &&
          products?.map(({ _id, name, image, price, category }) => (
            <Col key={_id} xs={12} sm={6} md={6} lg={3}>
              <div className="tiny-product-wrapper">
                <div className="category">{category}</div>
                <Link
                  to={`/categories/${category
                    .replace(" ", "-")
                    .toLowerCase()}/product/${_id}`}
                  className="product-name"
                >
                  {name.substring(0, 20) + "..."}
                </Link>
                <Link
                  to={`/categories/${category
                    .replace(" ", "-")
                    .toLowerCase()}/product/${_id}`}
                  className="img-wrapper"
                >
                  <img src={image} alt="product" />
                </Link>

                <div className="price">
                  <div className="new">${price}</div>
                  <del>$300.00</del>
                </div>

                <div className="options flex-align-center">
                  <div className="view flex-align-center">
                    <IoEyeOutline />
                    <span>view</span>
                  </div>
                  <div className="wishlist flex-align-center">
                    <IoMdHeartEmpty />
                    <span>wishlist</span>
                  </div>
                </div>
              </div>
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default CategoiresPageMainContent;
