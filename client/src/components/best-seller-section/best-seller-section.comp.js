import React, { useState } from 'react'

// Components
import Top20TabContent from './utils/top-20-tab/top-20-tab.comp'
import VideoCameraTabContent from './utils/video-camera/video-camera.comp'
import PhonesTablesTabContent from './utils/phones-tables/phones-tables.comp'
import LaptopsComputersTabContent from './utils/laptos-computers/laptos-computers.comp'

// Assets

// Styles
import './best-seller-section.styles.scss'

const BestSellerSection = () => {
  const [activeTab, setActiveTab] = useState('video-camera')

  return (
    <div className="custom-container best-seller-seciton-wrapper m-top-50">
      <div className="tabs-navigator flex-center-between">
        <div className="title">Best Sellers</div>

        <div className="navigator-items-wrapper flex-align-center">
          <div
            onClick={() => setActiveTab('audios')}
            className={`${
              activeTab === 'audios' ? 'active-tab' : undefined
            } tab-item`}
          >
            Audios
          </div>
          <div
            onClick={() => setActiveTab('cameras')}
            className={`${
              activeTab === 'cameras' ? 'active-tab' : undefined
            } tab-item`}
          >
            Cameras
          </div>
          <div
            onClick={() => setActiveTab('top-rated')}
            className={`${
              activeTab === 'top-rated' ? 'active-tab' : undefined
            } tab-item`}
          >
            Top Rated
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
        {activeTab === 'audios' && <Top20TabContent />}
        {activeTab === 'cameras' && <PhonesTablesTabContent />}
        {activeTab === 'top-rated' && <LaptopsComputersTabContent />}
        {activeTab === 'video-camera' && <VideoCameraTabContent />}
      </div>
    </div>
  )
}

export default BestSellerSection
