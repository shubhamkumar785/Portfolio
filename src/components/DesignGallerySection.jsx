import React from 'react'
import nestLiving from '../assets/images/nestLiving.png'
import ezoneImg from '../assets/images/ezoneImg.png'
import campussetuImg from '../assets/images/campussetu.png'
import ecommerceImg from '../assets/images/emmorce.png'

const DesignGallerySection = () => {
  const mobileProjects = [
    {
      id: 'nest-mobile',
      title: 'NestLiving Mobile',
      category: 'Mobile UI/UX',
      image: nestLiving,
      url: 'nestliving.app',
      tag: 'E-Commerce App'
    },
    {
      id: 'campus-mobile',
      title: 'CampusSetu Mobile',
      category: 'Mobile UI/UX',
      image: campussetuImg,
      url: 'campussetu.app',
      tag: 'Campus Platform'
    }
  ]

  const desktopProjects = [
    {
      id: 'ezone-desktop',
      title: 'E-Zone University ERP',
      category: 'Web Dashboard',
      image: ezoneImg,
      url: 'ezone-erp.edu',
      tag: 'Full Stack ERP'
    },
    {
      id: 'ecommerce-desktop',
      title: 'Modern E-Commerce Portal',
      category: 'Web Application',
      image: ecommerceImg,
      url: 'shop-nestliving.com',
      tag: 'React & Spring Boot'
    }
  ]

  return (
    <section className="design-gallery-section" id="about">
      <div className="design-gallery-shell">
        <div className="design-gallery-header">
          <div className="design-gallery-title">
            <span className="design-gallery-word design-word">DESIGN</span>
            <span className="design-gallery-word gallery-word">Gallery</span>
          </div>
          <p className="design-gallery-subtitle">
            Curated mobile & desktop interface designs from my real-world projects
          </p>
        </div>

        <div className="design-gallery-content">
          {/* Row 1: 2 Mobile Size Images */}
          <div className="design-row-block">
            <div className="row-badge-wrap">
              <span className="row-badge">ROW 1 — MOBILE INTERFACES</span>
            </div>
            <div className="mobile-gallery-row">
              {mobileProjects.map((project) => (
                <div key={project.id} className="mobile-device-card">
                  <div className="phone-mockup-frame">
                    <div className="phone-notch">
                      <span className="phone-camera"></span>
                      <span className="phone-speaker"></span>
                    </div>
                    <div className="mobile-screen-content">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="mobile-screen-img"
                      />
                      <div className="card-glass-overlay">
                        <span className="project-tag">{project.tag}</span>
                        <h4 className="project-name">{project.title}</h4>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Desktop Size Images */}
          <div className="design-row-block">
            <div className="row-badge-wrap">
              <span className="row-badge">ROW 2 — DESKTOP INTERFACES</span>
            </div>
            <div className="desktop-gallery-row">
              {desktopProjects.map((project) => (
                <div key={project.id} className="desktop-device-card">
                  <div className="browser-mockup-frame">
                    <div className="browser-top-bar">
                      <div className="browser-dots">
                        <span className="dot dot-red"></span>
                        <span className="dot dot-yellow"></span>
                        <span className="dot dot-green"></span>
                      </div>
                      <div className="browser-url-bar">{project.url}</div>
                    </div>
                    <div className="desktop-screen-content">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="desktop-screen-img"
                      />
                      <div className="card-glass-overlay">
                        <span className="project-tag">{project.tag}</span>
                        <h4 className="project-name">{project.title}</h4>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DesignGallerySection