import { useEffect } from "react";

// Components
import { Link } from "react-router-dom";
import LoadingSpinner from "../loading-spinner";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../../redux/actions/productActions";

const TopRatedColumn = ({ title }) => {
  const truncateStr = (str, max) => {
    if (str?.length > max) {
      return str.slice(0, max - 3) + "...";
    } else return str;
  };
  const dispatch = useDispatch();

  const {
    loading,
    data: { products },
    error,
  } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchAllProducts("/api/v1/products"));
  }, [dispatch]);

  return (
    <div className="product-colum-wrapper">
      <div className="title p-bottom-10">
        <span className="p-bottom-10">{title}</span>
      </div>
      {loading && <LoadingSpinner />}
      {error && <h4>{error}</h4>}
      {products?.slice(3, 6)?.map(({ _id, name, price, image, category }) => (
        <div key={_id} className="align-tiny-product-wrapper flex-align-center">
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

export default TopRatedColumn;
