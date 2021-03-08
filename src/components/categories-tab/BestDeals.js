import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Components
import { Link } from 'react-router-dom';
import { IoEyeOutline } from 'react-icons/io5';
import { IoMdHeartEmpty } from 'react-icons/io';
import LoadingSpinner from '../loading-spinner/loading-spinner.comp';
import MiddleImgGallery from './utils/middle-img-gallery/middle-img-gallery.comp';

const BestDeals = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  // Fetch products data
  useEffect(() => {
    setIsLoading(true);
    axios
      .get('/api/v1/categories/best-sellers')
      .then((res) => {
        setData(res.data.data.bestSellers);
      })
      .catch((err) => console.log(err));

    setTimeout(() => setIsLoading(false), 500);
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className="left-side-wrapper content-item">
            {data.slice(0, 4).map(({ id, img, name, price, category }) => (
              <div className="tiny-product-wrapper" key={id}>
                <div className="category">{category}</div>
                <Link
                  to={`/categories/best-sellers/product/${id}`}
                  className="product-name"
                >
                  {name}
                </Link>
                <Link
                  to={`/categories/best-sellers/product/${id}`}
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
          <div className="middle-side-wrapper content-item">
            <MiddleImgGallery />
          </div>
          <div className="right-side-wrapper content-item">
            {data.slice(4, 8).map(({ id, img, name, price, category }) => (
              <div className="tiny-product-wrapper" key={id}>
                <div className="category">{category}</div>
                <Link
                  to={`/categories/best-sellers/product/${id}`}
                  className="product-name"
                >
                  {name}
                </Link>
                <Link
                  to={`/categories/best-sellers/product/${id}`}
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
        </>
      )}
    </>
  );
};

export default BestDeals;
