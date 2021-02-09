import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Components
import AliceCarousel from 'react-alice-carousel';
import LoadingSpinner from '../loading-spinner/loading-spinner.comp';

// Styles
import 'react-alice-carousel/lib/alice-carousel.css';
import './new-arrivals.styles.scss';
import { Link } from 'react-router-dom';
import { IoEyeOutline } from 'react-icons/io5';
import { IoMdHeartEmpty } from 'react-icons/io';

const NewArrivals = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get('/api/v1/categories/new-arrivals')
      .then((res) => setData(res.data.data.new_arrivals));
    setTimeout(() => setIsLoading(false), 300);
  }, []);

  const responsive = {
    0: { items: 2 },
    768: { items: 3 },
    992: { items: 4 },
    1024: { items: 6 },
  };

  const items = data.map(({ id, name, img, price, category }) => (
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
        <img src={img} alt="product" />
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

      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <AliceCarousel
          mouseTracking
          items={items}
          responsive={responsive}
          disableDotsControls
          autoPlay
          autoPlayInterval={4000}
          infinite
        />
      )}
    </div>
  );
};

export default NewArrivals;
