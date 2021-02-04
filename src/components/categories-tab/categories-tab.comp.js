import React, { useState } from 'react';

// Components
import BestDeals from './BestDeals';
import TVAndVideo from './TVAndVideo';
import Camers from './Camers';
import Audio from './Audio';

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
            <BestDeals />
          </>
        )}

        {activeTab === 'tv-video' && (
          <>
            <TVAndVideo />
          </>
        )}

        {activeTab === 'cameras' && (
          <>
            <Camers />
          </>
        )}

        {activeTab === 'audio' && (
          <>
            <Audio />
          </>
        )}
      </div>
    </div>
  );
};

export default HomepageCategoriesTabs;
