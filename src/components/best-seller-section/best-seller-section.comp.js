import React, { useState } from 'react';

// Components
import Top20TabContent from './utils/top-20-tab/top-20-tab.comp';
import VideoCameraTabContent from './utils/video-camera/video-camera.comp';
import PhonesTablesTabContent from './utils/phones-tables/phones-tables.comp';
import LaptopsComputersTabContent from './utils/laptos-computers/laptos-computers.comp';

// Assets

// Styles
import './best-seller-section.styles.scss';

const BestSellerSection = () => {
  const [activeTab, setActiveTab] = useState('video-camera');

  return (
    <div className="custom-container best-seller-seciton-wrapper m-top-50">
      <div className="tabs-navigator flex-center-between">
        <div className="title">Best Sellers</div>

        <div className="navigator-items-wrapper flex-align-center">
          <div
            onClick={() => setActiveTab('top-20')}
            className={`${
              activeTab === 'top-20' ? 'active-tab' : undefined
            } tab-item`}
          >
            Top 20
          </div>
          <div
            onClick={() => setActiveTab('phones-tables')}
            className={`${
              activeTab === 'phones-tables' ? 'active-tab' : undefined
            } tab-item`}
          >
            Phones & Tables
          </div>
          <div
            onClick={() => setActiveTab('laptops-computers')}
            className={`${
              activeTab === 'laptops-computers' ? 'active-tab' : undefined
            } tab-item`}
          >
            Laptops & Computers
          </div>
          <div
            onClick={() => setActiveTab('video-camera')}
            className={`${
              activeTab === 'video-camera' ? 'active-tab' : undefined
            } tab-item`}
          >
            Video & Camera
          </div>
        </div>
      </div>
      <div className="tabs-content-wrapper">
        {activeTab === 'top-20' && <Top20TabContent />}
        {activeTab === 'phones-tables' && <PhonesTablesTabContent />}
        {activeTab === 'laptops-computers' && <LaptopsComputersTabContent />}
        {activeTab === 'video-camera' && <VideoCameraTabContent />}
      </div>
    </div>
  );
};

export default BestSellerSection;
