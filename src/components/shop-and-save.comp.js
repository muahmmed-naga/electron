import React from 'react';

// Components
import { Link } from 'react-router-dom';

// Styles
const styles = {
  display: 'block',
  backgroundImage:
    'url("https://cdn.shopify.com/s/files/1/0066/4322/0562/files/home-v5-banner_1366x.png?v=1604560580")',
  height: '100px',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

const ShopAndSave = () => {
  return <Link to="#" className="custom-container m-top-50" style={styles} />;
};

export default ShopAndSave;
