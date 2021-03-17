import React from 'react';

// Components
import AliceCarousel from 'react-alice-carousel';

// Styles
import 'react-alice-carousel/lib/alice-carousel.css';
import './our-parteners.styles.scss';

const OurParteners = () => {
  const responsive = {
    350: { items: 2 },
    550: { items: 2 },
    786: { items: 4 },
    992: { items: 5 },
    1024: { items: 6 },
  };

  const items = [
    <img
      src="//cdn.shopify.com/s/files/1/0066/4322/0562/files/partner_logo_8_230x85.png?v=1604560580"
      alt="item"
    />,

    <img
      src="//cdn.shopify.com/s/files/1/0066/4322/0562/files/partner_logo_8_230x85.png?v=1604560580"
      alt="item"
    />,
    <img
      src="//cdn.shopify.com/s/files/1/0066/4322/0562/files/partner_logo_8_230x85.png?v=1604560580"
      alt="item"
    />,
    <img
      src="//cdn.shopify.com/s/files/1/0066/4322/0562/files/partner_logo_8_230x85.png?v=1604560580"
      alt="item"
    />,
    <img
      src="//cdn.shopify.com/s/files/1/0066/4322/0562/files/partner_logo_8_230x85.png?v=1604560580"
      alt="item"
    />,
    <img
      src="//cdn.shopify.com/s/files/1/0066/4322/0562/files/partner_logo_8_230x85.png?v=1604560580"
      alt="item"
    />,
    <img
      src="//cdn.shopify.com/s/files/1/0066/4322/0562/files/partner_logo_8_230x85.png?v=1604560580"
      alt="item"
    />,
    <img
      src="//cdn.shopify.com/s/files/1/0066/4322/0562/files/partner_logo_8_230x85.png?v=1604560580"
      alt="item"
    />,
    <img
      src="//cdn.shopify.com/s/files/1/0066/4322/0562/files/partner_logo_8_230x85.png?v=1604560580"
      alt="item"
    />,
    <img
      src="//cdn.shopify.com/s/files/1/0066/4322/0562/files/partner_logo_8_230x85.png?v=1604560580"
      alt="item"
    />,
    <img
      src="//cdn.shopify.com/s/files/1/0066/4322/0562/files/partner_logo_8_230x85.png?v=1604560580"
      alt="item"
    />,
    <img
      src="//cdn.shopify.com/s/files/1/0066/4322/0562/files/partner_logo_8_230x85.png?v=1604560580"
      alt="item"
    />,
  ];
  return (
    <div className="custom-container our-parteners-wrapper m-top-50">
      <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        disableDotsControls
        autoPlay
        autoPlayInterval={5000}
      />
    </div>
  );
};

export default OurParteners;
