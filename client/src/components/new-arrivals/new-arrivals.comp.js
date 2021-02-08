import React from 'react';

// Components
import AliceCarousel from 'react-alice-carousel';
import TinyProduct from '../tiny-product/tiny-product.comp';

// Assets
import NEW_ARRIVALS from './data';

// Styles
import 'react-alice-carousel/lib/alice-carousel.css';
import './new-arrivals.styles.scss';

const NewArrivals = () => {
  const responsive = {
    0: { items: 2 },
    768: { items: 3 },
    992: { items: 4 },
    1024: { items: 6 },
  };

  const items = NEW_ARRIVALS.map((item) => (
    <TinyProduct key={item.id} {...item} />
  ));

  return (
    <div className="custom-container new-arrivals-wrapper m-top-50">
      <div className="tabs-navigator flex-center-between">
        <div className="title">New Arrivals</div>
        <div className="carousel-navigator"></div>
      </div>

      <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        disableDotsControls
        autoPlay
        autoPlayInterval={4000}
        infinite
      />
    </div>
  );
};

export default NewArrivals;
