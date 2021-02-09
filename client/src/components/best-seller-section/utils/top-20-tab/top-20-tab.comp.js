import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Components
import { Link } from 'react-router-dom';
import LoadingSpinner from '../../../loading-spinner/loading-spinner.comp';

const Top20TabContent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get('/api/v1/categories/audios')
      .then((res) => setData(res.data.data.audios));
    setTimeout(() => setIsLoading(false), 300);
  }, []);

  const truncateStr = (str, max) => {
    if (str?.length > max) {
      return str.slice(0, max - 3) + '...';
    } else return str;
  };

  return (
    <div className="tab-content">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        data.map(({ id, name, img, price, category }) => (
          <div className="align-tiny-product-wrapper flex-align-center">
            <Link
              to={`/categories/audios/product/${id}`}
              className="img-wrapper"
            >
              <img src={img} alt="product" />
            </Link>

            <div className="content">
              <div className="category">{category}</div>
              <Link
                to={`/categories/audios/product/${id}`}
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
        ))
      )}
    </div>
  );
};

export default Top20TabContent;
