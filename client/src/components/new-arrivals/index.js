// Components
import AliceCarousel from "react-alice-carousel";
import { Link } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";

// Styles
import "react-alice-carousel/lib/alice-carousel.css";
import "./index.scss";

import VIDEOS_PRODUCTS from "../../data/videos_products";

const NewArrivals = () => {
  const responsive = {
    0: { items: 2 },
    768: { items: 3 },
    992: { items: 4 },
    1024: { items: 6 },
  };

  const items = VIDEOS_PRODUCTS.map(({ id, name, imgUrl, price, category }) => (
    <div className="tiny-product-wrapper">
      <div className="category">{category}</div>
      <Link
        to={`/categories/new-arrivals/product/${id}`}
        className="product-name"
      >
        {name}
      </Link>
      <Link
        to={`/categories/new-arrivals/product/${id}`}
        className="img-wrapper"
      >
        <img src={imgUrl} alt="product" />
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
