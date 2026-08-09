import React from 'react'
import ProfileSection from './ProfileSection'
import CenterSection from './CenterSection'
import RightSection from './RightSection'

const HeroSection = () => {
  return (
    <section className="hero-section" id="about">
      <div className="hero-grid">
        <ProfileSection />
        <CenterSection />
        <RightSection />
      </div>
    </section>
  )
}

export default HeroSection
