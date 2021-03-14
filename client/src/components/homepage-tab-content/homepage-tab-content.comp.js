import React, { useState } from 'react'

// Components
import LeftSideTabFeatured from './utils/left-side-tab/left-side-tab-featured.comp'
import LeftSideTabOnSale from './utils/left-side-tab/left-side-tab-onsale.comp'
import LeftSideTabTopRated from './utils/left-side-tab/left-side-tab-toprated.comp'
import RightSideTabOnSale from './utils/right-side-tab/right-side-tab-onsale.comp'
import RightSideTabFeatured from './utils/right-side-tab/right-side-tab-featured.comp'
import RightSideTabTopRated from './utils/right-side-tab/right-side-tab-toprated.comp'

// Data
import TabContent from './../../data/tab-content'

// Styles
import './homepage-tab-content.styles.scss'

const HomepageTabContent = () => {
  const [activeTab, setActiveTab] = useState('featured-tab')
  const featuredTab = TabContent.featured
  const onSaleTab = TabContent.onSale
  const topRatedTab = TabContent.topRated

  return (
    <div className="custom-container homepage-tab-content-wrapper m-top-50">
      <div className="left-side">
        {activeTab === 'featured-tab' && (
          <LeftSideTabFeatured data={featuredTab.left} />
        )}
        {activeTab === 'on-sale-tab' && (
          <LeftSideTabOnSale data={onSaleTab.left} />
        )}
        {activeTab === 'top-rated-tab' && (
          <LeftSideTabTopRated data={topRatedTab.left} />
        )}
      </div>
      <div className="right-side">
        <div className="tab-navigator flex-align-center flex-justify-center">
          <div
            onClick={() => setActiveTab('featured-tab')}
            className={activeTab === 'featured-tab' ? 'active-tab' : undefined}
          >
            Featured
          </div>
          <div
            onClick={() => setActiveTab('on-sale-tab')}
            className={activeTab === 'on-sale-tab' ? 'active-tab' : undefined}
          >
            On Sale
          </div>
          <div
            onClick={() => setActiveTab('top-rated-tab')}
            className={activeTab === 'top-rated-tab' ? 'active-tab' : undefined}
          >
            Top Rated
          </div>
        </div>

        <div className="m-top-20">
          {activeTab === 'featured-tab' && (
            <RightSideTabFeatured data={featuredTab.main} />
          )}
          {activeTab === 'on-sale-tab' && (
            <RightSideTabOnSale data={onSaleTab.main} />
          )}
          {activeTab === 'top-rated-tab' && (
            <RightSideTabTopRated data={topRatedTab.main} />
          )}
        </div>
      </div>
    </div>
  )
}

export default HomepageTabContent
