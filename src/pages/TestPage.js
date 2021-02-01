import React, { useState } from 'react';
import ProductModal from '../components/product-modal/product-modal.comp';

const TestPage = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <ProductModal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default TestPage;
