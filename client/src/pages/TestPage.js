import React, { useState, useEffect } from 'react';

import axios from 'axios';

const TestPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('/api/products')
      .then((res) => setProducts(res.data.data.products));
  });

  return (
    <div className="custom-container">
      {products?.map(({ id, title }) => (
        <span key={id}>{title}</span>
      ))}
    </div>
  );
};

export default TestPage;
