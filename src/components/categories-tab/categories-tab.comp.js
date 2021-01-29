import React, { useState } from 'react';

// Components
import MiddleImgGallery from './utils/middle-img-gallery/middle-img-gallery.comp';
import CategoriesLeftSide from './utils/left-side/left-side.comp';
import CategoriesRightSide from './utils/right-side/right-side.comp';
import GALLERY_IMAGES from './utils/middle-img-gallery/data/best-deals.data';

// Styles
import './categories-tab.styles.scss';

const HomepageCategoriesTabs = () => {
  const [activeTab, setActiveTab] = useState('best-deals');

  return (
    <div className="custom-container homepage-categories-tabs-wrapper m-top-50">
      <div className="tab-navigator flex-align-center p-bottom-10">
        <div
          className={`tab-item ${
            activeTab === 'best-deals' ? 'active-tab' : undefined
          }`}
          onClick={() => setActiveTab('best-deals')}
        >
          Best Deals
        </div>
        <div
          className={`tab-item ${
            activeTab === 'tv-video' ? 'active-tab' : undefined
          }`}
          onClick={() => setActiveTab('tv-video')}
        >
          TV & Video
        </div>
        <div
          className={`tab-item ${
            activeTab === 'cameras' ? 'active-tab' : undefined
          }`}
          onClick={() => setActiveTab('cameras')}
        >
          Cameras
        </div>
        <div
          className={`tab-item ${
            activeTab === 'audio' ? 'active-tab' : undefined
          }`}
          onClick={() => setActiveTab('audio')}
        >
          Audio
        </div>
      </div>

      <div className="content">
        {activeTab === 'best-deals' && (
          <>
            <div className="left-side-wrapper content-item">
              <CategoriesLeftSide />
            </div>
            <div className="middle-side-wrapper content-item">
              <MiddleImgGallery images={GALLERY_IMAGES} />
            </div>
            <div className="right-side-wrapper content-item">
              <CategoriesRightSide />
            </div>
          </>
        )}

        {activeTab === 'tv-video' && (
          <>
            <div className="left-side-wrapper content-item">
              <CategoriesLeftSide />
            </div>
            <div className="middle-side-wrapper content-item">
              <MiddleImgGallery />
            </div>
            <div className="right-side-wrapper content-item">
              <CategoriesRightSide />
            </div>
          </>
        )}

        {activeTab === 'cameras' && (
          <>
            <div className="left-side-wrapper content-item">
              <CategoriesLeftSide />
            </div>
            <div className="middle-side-wrapper content-item">
              <MiddleImgGallery />
            </div>
            <div className="right-side-wrapper content-item">
              <CategoriesRightSide />
            </div>
          </>
        )}

        {activeTab === 'audio' && (
          <>
            <div className="left-side-wrapper content-item">
              <CategoriesLeftSide />
            </div>
            <div className="middle-side-wrapper content-item">
              <MiddleImgGallery />
            </div>
            <div className="right-side-wrapper content-item">
              <CategoriesRightSide />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default HomepageCategoriesTabs;
