import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Components
import { Link } from 'react-router-dom';
import LoadingSpinner from '../loading-spinner/loading-spinner.comp';

const TopRatedColumn = ({ title }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get('/api/v1/categories/top-rated')
      .then((res) => setData(res.data.data.top_rated));
    setTimeout(() => setIsLoading(false), 300);
  }, []);

  const truncateStr = (str, max) => {
    if (str?.length > max) {
      return str.slice(0, max - 3) + '...';
    } else return str;
  };

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="product-colum-wrapper">
          <div className="title p-bottom-10">
            <span className="p-bottom-10">{title}</span>
          </div>
          {data.slice(0, 3).map(({ id, name, img, price, category }) => (
            <div className="align-tiny-product-wrapper flex-align-center">
              <Link
                to={`/categories/top-rated/product/${id}`}
                className="img-wrapper"
              >
                <img src={img} alt="product" />
              </Link>

              <div className="content">
                <div className="category">{category}</div>
                <Link
                  to={`/categories/top-rated/product/${id}`}
                  className="product-name"
                >
                  {truncateStr(name, 15)}
                </Link>
                <div className="price">
                  <div className="new">${price}.00</div>
                  <del>$250.00</del>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default TopRatedColumn;
