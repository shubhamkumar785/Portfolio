import React from 'react'
import heroImage from '../assets/images/shubham (1).png'

const CenterSection = () => {
  return (
    <div className="center-section reveal-up delay-1">
      <div className="large-text-top">BACKEND</div>

      <div className="center-image-container">
        <img
          src={heroImage}
          alt="Shubham"
          className="center-image"
        />
      </div>

      <div className="large-text-bottom">DEVELOPER</div>
    </div>
  )
}

export default CenterSection
