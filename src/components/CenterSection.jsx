import React from 'react'
import heroImage from '../assets/images/shubham (1).png'

const CenterSection = () => {
  return (
    <div className="center-section">
      <div className="large-text-top">BACKEND</div>
      
      <div className="intro-box">
        <p className="intro-text">
          I'm Shubham Backend and Gen AI Developer building secure and scalable systems. I specialize in Java Spring Boot, Generative AI applications, and production-ready backend solutions.
        </p>
      </div>
      
      <div className="center-image-container">
        <img 
          src={heroImage} 
          alt="Shubham" 
          className="center-image" 
        />
        <div className="name-label">
          Shubham
        </div>
      </div>
      
      <div className="large-text-bottom">DEVELOPER</div>
    </div>
  )
}

export default CenterSection
