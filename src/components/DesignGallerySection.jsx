import React from 'react'
import phone1Img from '../assets/images/phone1.png'
import phone2Img from '../assets/images/phone2.jpg'
import laptop1Img from '../assets/images/laptop1.webp'
import laptop2Img from '../assets/images/laptop2.webp'

const DesignGallerySection = () => {
  return (
    <section className="design-gallery-section" id="about">
      <div className="design-gallery-shell">
        <div className="design-gallery-title">
          <span className="design-gallery-word design-word">DESIGN</span>
          <span className="design-gallery-word gallery-word">Gallery</span>
        </div>

        <div className="design-gallery-grid" aria-label="Design gallery">
          <div className="design-gallery-row design-gallery-row-top">
            <div className="design-card design-card-top">
              <img src={phone1Img} alt="Phone design one" className="design-card-image" />
            </div>

            <div className="design-card design-card-top">
              <img src={phone2Img} alt="Phone design two" className="design-card-image" />
            </div>
          </div>

          <div className="design-gallery-row design-gallery-row-bottom">
            <div className="design-card design-card-bottom">
              <img src={laptop1Img} alt="Laptop design one" className="design-card-image" />
            </div>

            <div className="design-card design-card-bottom">
              <img src={laptop2Img} alt="Laptop design two" className="design-card-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DesignGallerySection