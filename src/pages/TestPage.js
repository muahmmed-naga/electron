import React, { useState, useEffect } from 'react';

import axios from 'axios';
import LoadingSpinner from '../components/loading-spinner/loading-spinner.comp';

const TestPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const fetchProducts = () => {
    axios
      .get('/api/v1/products')
      .then((res) => setProducts(res.data.data.products));
  };

  useEffect(() => {
    setIsLoading(true);
    fetchProducts();
    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="custom-container">
          {products?.map(({ id, name }) => (
            <span key={id}>{name}</span>
          ))}
        </div>
      )}
    </>
  );
};

export default TestPage;
