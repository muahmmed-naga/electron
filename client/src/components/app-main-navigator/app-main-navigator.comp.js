import React from 'react';

// Components
import AllDepartments from './utils/all-departments/all-departments.comp';
import MainNavigator from './utils/navigator/navigator.comp';

// Styles
import './app-main-navigator.styles.scss';

const AppMainNavigator = () => {
  return (
    <div className="custom-container app-main-navigator-wrapper flex">
      <AllDepartments />
      <MainNavigator />
    </div>
  );
};

export default AppMainNavigator;
