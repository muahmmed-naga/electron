import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Components
import { Link } from 'react-router-dom';
import { IoEyeOutline } from 'react-icons/io5';
import { IoMdHeartEmpty } from 'react-icons/io';
import LoadingSpinner from '../../../loading-spinner/loading-spinner.comp';

// Styles
import './right-side-tab-featured.styles.scss';

const RightSideTabTopRated = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get('/api/v1/categories/top-rated')
      .then((res) => setData(res.data.data.top_rated));
    setTimeout(() => setIsLoading(false), 300);
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="righ-side-tab-featured">
          {data.map(({ id, img, name, price, category }) => (
            <div className="tiny-product-wrapper" key={id}>
              <div className="category">{category}</div>
              <Link
                to={`/categories/top-rated/product/${id}`}
                className="product-name"
              >
                {name}
              </Link>
              <Link
                to={`/categories/top-rated/product/${id}`}
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
          ))}
        </div>
      )}
    </>
  );
};

export default RightSideTabTopRated;
