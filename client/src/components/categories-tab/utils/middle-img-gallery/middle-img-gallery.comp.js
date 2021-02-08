import React from 'react';

// Components
import ImageGallery from 'react-image-gallery';

// Styles
import './middle-img-gallery.styles.scss';

const MiddleImgGallery = ({ data }) => {
  return (
    <div className="middle-image-gallery-wrapper">
      <div className="category">Donna Karan</div>
      <div className="product-name">Faxtex Product Sample</div>
      <ImageGallery
        items={data}
        showPlayButton={false}
        lazyLoad={true}
        autoPlay
      />
    </div>
  );
};

export default MiddleImgGallery;
