import React from 'react'

const ProfileSection = () => {
  return (
    <div className="left-column reveal-left">
      <div className="intro-profile-card">
        <div className="intro-badge">
          <span>HI THERE!</span>
        </div>
        <h1 className="intro-name">Shubham</h1>
        <p className="intro-role">Backend & Gen AI Engineer</p>
        <p className="intro-short-desc">
          Crafting scalable microservices, resilient APIs, and intelligent AI-powered solutions.
        </p>

      </div>

      <h2 className="what-i-do">WHAT I DO ?</h2>

      <p className="description">
        I build secure and scalable backend systems, intelligent APIs, and AI-powered applications — transforming complex ideas into reliable, efficient, and production-ready solutions.
      </p>

      <div className="stats">
        <div className="stat-item">
          <div className="stat-number">5</div>
          <div className="stat-label">PROJECTS</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">5+</div>
          <div className="stat-label">TECHNOLOGIES</div>
        </div>
      </div>

      <div className="company-logos">
        <div className="company-logo">JAVA</div>
        <div className="company-logo">SPRING BOOT</div>
        <div className="company-logo">GEN AI</div>
        <div className="company-logo">SYSTEM DESIGN</div>
        <div className="company-logo">AI AGENT</div>
        <div className="company-logo">REST API</div>
        <div className="company-logo">MICROSERVICE</div>
      </div>
    </div>
  )
}

export default ProfileSection
