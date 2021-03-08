import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Components,
import { Link } from 'react-router-dom';

// Styles
import './left-side-tab-featured.styles.scss';

const LeftSideTabOnSale = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('/api/v1/categories/on-sale')
      .then((res) => setData(res.data.data.on_sale));
  }, []);

  return (
    <>
      {data.slice(0, 1).map(({ id, name, img, price }) => (
        <div key={id} className="left-side-tab-featured">
          <Link
            to={`/categories/on-sale/product/${id}`}
            className="img-wrapper"
          >
            <img src={img} alt="tab-1" />
          </Link>

          <Link
            to={`/categories/on-sale/product/${id}`}
            className="product-name"
          >
            <div>{name}</div>
          </Link>

          <div className="price flex-align-center">
            <div className="new">${price}</div>
            <del>$300.00</del>
          </div>

          <div className="on-stock">
            <div className="head">
              <span>
                Already Sold: <b>6</b>
              </span>
              <span>
                Available: <b>26</b>
              </span>
            </div>

            <div className="progress">
              <div className="solded" />
            </div>
          </div>

          <div className="special-offer">special offer</div>
          {/* {isSave && (
                <div className="discound-offer">
                  save <b>{isSave.percent}%</b>
                </div>
              )} */}
        </div>
      ))}
    </>
  );
};

export default LeftSideTabOnSale;
