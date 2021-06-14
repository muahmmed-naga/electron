import React from "react";

// Components
import AllDepartments from "./utils/all-departments";
import MainNavigator from "./utils/navigator";

// Styles
import "./index.scss";

const AppMainNavigator = () => {
  return (
    <div className="custom-container app-main-navigator-wrapper flex">
      <AllDepartments />
      <MainNavigator />
    </div>
  );
};

export default AppMainNavigator;
