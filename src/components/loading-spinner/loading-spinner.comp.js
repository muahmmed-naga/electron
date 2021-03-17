import React from 'react'

// Styles
import './loading-spinner.styles.scss'

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner-wrapper lds-roller">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default LoadingSpinner
