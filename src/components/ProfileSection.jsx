import React from 'react'

const ProfileSection = () => {
  return (
    <div className="left-column anim-from-left">
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

      <h2 className="what-i-do anim-from-bottom anim-delay-1">WHAT I DO ?</h2>

      <p className="description anim-from-bottom anim-delay-2">
        I build secure and scalable backend systems, intelligent APIs, and AI-powered applications — transforming complex ideas into reliable, efficient, and production-ready solutions.
      </p>

      <div className="stats">
        <div className="stat-item anim-from-left anim-delay-2">
          <div className="stat-number">5</div>
          <div className="stat-label">PROJECTS</div>
        </div>
        <div className="stat-item anim-from-right anim-delay-3">
          <div className="stat-number">5+</div>
          <div className="stat-label">TECHNOLOGIES</div>
        </div>
      </div>

      <div className="company-logos">
        <div className="company-logo anim-from-bottom anim-delay-1">JAVA</div>
        <div className="company-logo anim-from-bottom anim-delay-2">SPRING BOOT</div>
        <div className="company-logo anim-from-bottom anim-delay-3">GEN AI</div>
        <div className="company-logo anim-from-bottom anim-delay-1">SYSTEM DESIGN</div>
        <div className="company-logo anim-from-bottom anim-delay-2">AI AGENT</div>
        <div className="company-logo anim-from-bottom anim-delay-3">REST API</div>
        <div className="company-logo anim-from-bottom anim-delay-1">MICROSERVICE</div>
      </div>
    </div>
  )
}

export default ProfileSection
