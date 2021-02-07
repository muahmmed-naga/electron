import React from 'react';
import LoadingSpinner from '../loading-spinner/loading-spinner.comp';

const WithSpinner = (WrappedComponent) => ({ isLoading, ...otherProps }) => (
  <>{isLoading ? <LoadingSpinner /> : <WrappedComponent {...otherProps} />}</>
);

export default WithSpinner;
