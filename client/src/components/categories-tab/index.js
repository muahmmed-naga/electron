import React, { useState } from "react";

// Components
import BestDeals from "./BestDeals";
import TVAndVideo from "./TVAndVideo";
import Camers from "./Camers";
import Audio from "./Audio";

// Data
import CATEGORIES_PRODUCTS from "../../data/categories_products";

// Styles
import "./index.scss";

const HomepageCategoriesTabs = () => {
  const [activeTab, setActiveTab] = useState("best-deals");
  const { bestDeals, tv_video, cameras } = CATEGORIES_PRODUCTS;

  return (
    <div className="custom-container homepage-categories-tabs-wrapper m-top-50">
      <div className="tab-navigator flex-align-center p-bottom-10">
        <div
          className={`tab-item ${
            activeTab === "best-deals" ? "active-tab" : undefined
          }`}
          onClick={() => setActiveTab("best-deals")}
        >
          Best Deals
        </div>
        <div
          className={`tab-item ${
            activeTab === "tv-video" ? "active-tab" : undefined
          }`}
          onClick={() => setActiveTab("tv-video")}
        >
          TV & Video
        </div>
        <div
          className={`tab-item ${
            activeTab === "cameras" ? "active-tab" : undefined
          }`}
          onClick={() => setActiveTab("cameras")}
        >
          Cameras
        </div>
        <div
          className={`tab-item ${
            activeTab === "audio" ? "active-tab" : undefined
          }`}
          onClick={() => setActiveTab("audio")}
        >
          Audio
        </div>
      </div>

      <div className="content">
        {activeTab === "best-deals" && <BestDeals data={bestDeals} />}
        {activeTab === "tv-video" && <TVAndVideo data={tv_video} />}
        {activeTab === "cameras" && <Camers data={cameras} />}
        {activeTab === "audio" && <Audio data={bestDeals} />}
      </div>
    </div>
  );
};

export default HomepageCategoriesTabs;
