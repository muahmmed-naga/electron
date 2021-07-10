import { useEffect } from "react";

// Components
import { Link } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";
import AliceCarousel from "react-alice-carousel";
import { IoMdHeartEmpty } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../../redux/actions/productActions";

// Styles
import "react-alice-carousel/lib/alice-carousel.css";
import "./index.scss";

const NewArrivals = () => {
  const dispatch = useDispatch();

  const {
    data: { products },
  } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchAllProducts("/api/v1/products"));
  }, [dispatch]);

  const responsive = {
    0: { items: 2 },
    768: { items: 3 },
    992: { items: 4 },
    1024: { items: 6 },
  };

  const items = products?.map(({ _id, name, image, price, category }) => (
    <div className="tiny-product-wrapper">
      <div className="category">{category}</div>
      <Link
        to={`/categories/${category
          .replace(" ", "-")
          .toLowerCase()}/product/${_id}`}
        className="product-name"
      >
        {name}
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
  ));

  return (
    <div className="custom-container new-arrivals-wrapper m-top-50">
      <div className="tabs-navigator flex-center-between">
        <div className="title">New Arrivals</div>
        <div className="carousel-navigator"></div>
      </div>

      <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        disableDotsControls
        autoPlay
        autoPlayInterval={4000}
        infinite
      />
    </div>
  );
};

export default NewArrivals;
