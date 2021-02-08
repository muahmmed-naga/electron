import React, { useState, useEffect } from "react";
import axios from "axios";

// Components
import CategoriesLeftSide from "./utils/left-side/left-side.comp";
import CategoriesRightSide from "./utils/right-side/right-side.comp";
import LoadingSpinner from "../loading-spinner/loading-spinner.comp";
import MiddleImgGallery from "./utils/middle-img-gallery/middle-img-gallery.comp";

const Camers = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [leftData, setLeftData] = useState([]);
  const [middleData, setMiddleData] = useState([]);
  const [rightData, setRightData] = useState([]);

  // Fetch products data
  useEffect(() => {
    setIsLoading(true);
    axios.get("/api/v1/categories").then(res => {
      const { left, middle, right } = res.data.data.categories.cameras;
      setLeftData(left);
      setMiddleData(middle);
      setRightData(right);
    });
    setTimeout(() => setIsLoading(false), 500);
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className="left-side-wrapper content-item">
            <CategoriesLeftSide data={leftData} />
          </div>
          <div className="middle-side-wrapper content-item">
            <MiddleImgGallery data={middleData} />
          </div>
          <div className="right-side-wrapper content-item">
            <CategoriesRightSide data={rightData} />
          </div>{" "}
        </>
      )}
    </>
  );
};

export default Camers;
