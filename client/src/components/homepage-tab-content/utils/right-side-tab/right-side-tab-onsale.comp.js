import { useEffect } from "react";

// Components
import { Link } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllProducts } from "../../../../redux/actions/productActions";
import LoadingSpinner from "./../../../loading-spinner";

// Styles
import "./right-side-tab-featured.styles.scss";

const RightSideTabOnSale = () => {
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
    <div className="righ-side-tab-featured">
      {loading && <LoadingSpinner />}
      {error && <h3>{error}</h3>}
      {!loading &&
        !error &&
        products?.slice(4, 11)?.map(({ _id, name, image, price, category }) => (
          <div className="tiny-product-wrapper" key={_id}>
            <div className="category">{category}</div>
            <Link
              to={`/categories/${category
                .replace(" ", "-")
                .toLowerCase()}/product/${_id}`}
              className="product-name"
              style={{ textAlign: "center" }}
            >
              {name.substring(0, 25) + "..."}
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
        ))}
    </div>
  );
};

export default RightSideTabOnSale;
