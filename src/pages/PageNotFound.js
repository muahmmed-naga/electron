import React, { useEffect } from 'react';

const PageNotFound = () => {
  // Handlers functions
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `Electron | Page Not Found (404)`;
  });

  return (
    <div className="custom-container">
      <h1>404 Page not found</h1>
    </div>
  );
};

export default PageNotFound;
