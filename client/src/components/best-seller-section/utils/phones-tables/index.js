import React, { useEffect } from "react";

// Components
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../../../../redux/actions/productActions";
import LoadingSpinner from "../../../loading-spinner";

const CategoriesFeatured = () => {
  const truncateStr = (str, max) => {
    if (str?.length > max) {
      return str.slice(0, max - 3) + "...";
    } else return str;
  };

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
    <div className="tab-content">
      {loading && <LoadingSpinner />}
      {error && <h3>{error}</h3>}

      {!loading &&
        !error &&
        products &&
        products.map(({ _id, name, image, price, category }) => (
          <div
            className="align-tiny-product-wrapper flex-align-center"
            key={_id}
          >
            <Link
              to={`/categories/${category
                .replace(" ", "-")
                .toLowerCase()}/product/${_id}`}
              className="img-wrapper"
            >
              <img src={image} alt="product" />
            </Link>

            <div className="content">
              <div className="category">{category}</div>
              <Link
                to={`/categories/${category
                  .replace(" ", "-")
                  .toLowerCase()}/product/${_id}`}
                className="product-name"
              >
                {truncateStr(name, 15)}
              </Link>
              <div className="price">
                <div className="new">${price}</div>
                <del>$250.00</del>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CategoriesFeatured;
