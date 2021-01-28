import React from 'react';

// Components
import TinyProduct from '../tiny-product/tiny-product.comp';
import MiddleImgGallery from './utils/middle-img-gallery/middle-img-gallery.comp';

// Assets
import ProductImg from '../../assets/images/products/product-1.jpg';
import ProductImg2 from '../../assets/images/products/product-3.webp';

// Styles
import './categories-tab.styles.scss';

const HomepageCategoriesTabs = () => {
  return (
    <div className="custom-container homepage-categories-tabs-wrapper m-top-50">
      <div className="tab-navigator flex-align-center p-bottom-10">
        <div className="tab-item">best deals</div>
        <div className="tab-item">TV & Video</div>
        <div className="tab-item">Cameras</div>
        <div className="tab-item">Audio</div>
        <div className="tab-item">Cell Phones</div>
        <div className="tab-item">GPS & Navi</div>
      </div>

      <div className="content">
        <div className="left-side-wrapper content-item">
          <TinyProduct ProductImg={ProductImg} />
          <TinyProduct ProductImg={ProductImg} />
          <TinyProduct ProductImg={ProductImg} />
          <TinyProduct ProductImg={ProductImg} />
        </div>

        <div className="middle-side-wrapper content-item">
          <MiddleImgGallery />
        </div>
        <div className="right-side-wrapper content-item">
          <TinyProduct ProductImg={ProductImg2} />
          <TinyProduct ProductImg={ProductImg2} />
          <TinyProduct ProductImg={ProductImg2} />
          <TinyProduct ProductImg={ProductImg2} />
        </div>
      </div>
    </div>
  );
};

export default HomepageCategoriesTabs;
