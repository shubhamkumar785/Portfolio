import React, { useState, useEffect } from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'
import campussetuImg from '../assets/images/campussetu.png'
import ecommerceImg from '../assets/images/emmorce.png'
import feemanagementImg from '../assets/images/feemanagement.png'
import portfolioImg from '../assets/images/portfolio.png'
import nestLivingImg from '../assets/images/nestLiving.png'
import ezoneImg from '../assets/images/ezoneImg.png'
import poonamPrintingShopImg from '../assets/images/PoonamPrintingShop.png'

const ProjectsSection = () => {
  useScrollAnimation()
  const [showAll, setShowAll] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Detect screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const projects = [
    {
      title: "Poonam Printing Shop",
      category: "MERN",
      description: "A modern printing shop management system with customer order tracking, real-time order status updates, invoice generation, and admin dashboard for managing products, pricing, and customer requests efficiently.",
      technologies: ["Express.js", "React", "Node.js", "REST API", "JWT", "Stripe", "Git", "GitHub", "Vercel"],
      link: "https://poonam-printing.vercel.app/",
      image: poonamPrintingShopImg
    },
    {
      title: "NestLiving",
      category: "Full Stack",
      description: "A modern Home & Lifestyle eCommerce platform for furniture, home décor, lighting, ceramics, and premium living essentials with secure authentication, product catalog, cart, wishlist, and seamless checkout.",
      technologies: ["Java", "Spring Boot", "React", "MySQL", "Hibernate", "JPA", "Spring Security", "JWT", "REST API", "AWS", "Git", "GitHub"],
      link: "https://nestliving.vercel.app/",
      image: nestLivingImg
    },
    {
      title: "CampusSetu",
      category: "Full Stack",
      description: "A smart campus management platform for students and faculty with real-time features.",
      technologies: ["Java", "Spring Boot", "Microservice", "AWS", "Docker", "GitHub", "API-Gateway", "WebSocket", "MySQL", "React"],
      link: "https://campussetu.in/",
      image: campussetuImg
    },
    {
      title: "E-Zone",
      category: "Full Stack",
      description: "A full-stack university ERP with secure authentication, role-based dashboards, and real-time communication.",
      technologies: ["Spring Boot", "React", "Microservices", "JWT", "API-Gateway", "WebSocket", "MySQL", "AWS", "Git", "GitHub", "Docker", "Ci/Cd"],
      link: "https://ezone-university.vercel.app",
      image: ezoneImg
    },
    {
      title: "ECommerce",
      category: "Full Stack",
      description: "A scalable eCommerce platform with authentication, cart, and payment integration.",
      technologies: ["Java", "Spring Boot", "REST API", "spring security", "MongoDB", "JWT", "AWS", "Git", "GitHub", "Docker"],
      link: "https://github.com/shubhamkumar785/ecommerce",
      image: ecommerceImg
    },
    {
      title: "Fee Management System",
      category: "Web Application",
      description: "A system to manage student fee records, payments, and reports efficiently.",
      technologies: ["Java", "Swing GUI Framework", "GitHub", "JDBC", "MySQL"],
      link: "https://github.com/shubhamkumar785/FeeManagementSystem",
      image: feemanagementImg
    },
    {
      title: "Portfolio",
      category: "Frontend",
      description: "A modern developer portfolio showcasing skills, projects, and experience.",
      technologies: ["HTML", "CSS", "JS", "React", "GitHub", "Git", "vercel"],
      link: "https://shubhxm-portfolio.vercel.app/",
      image: portfolioImg
    }
  ]

  // Show 3 projects on mobile, 6 on desktop
  const initialProjectCount = isMobile ? 3 : 6
  const projectsToShow = showAll ? projects : projects.slice(0, initialProjectCount)
  const hasMoreProjects = projects.length > initialProjectCount

  return (
    <section className="projects-section" id="works">
      <div className="projects-header reveal-up">
        <h2 className="projects-heading">IDEAS BROUGHT TO LIFE</h2>
      </div>

      <div className="projects-grid">
        {projectsToShow.map((project, index) => (
          <div key={index} className={`project-card ${index % 2 === 0 ? 'anim-from-left' : 'anim-from-right'} anim-delay-${(index % 3) + 1}`}>
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
                loading="lazy"
                decoding="async"
              />
            ) : (
              <div className="project-image-placeholder">
                <span>{project.title}</span>
              </div>
            )}
            <div className="project-content">
              <span className="project-category">{project.category}</span>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>
              <a href={project.link} className="project-button" target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
          </div>
        ))}
      </div>

      {hasMoreProjects && (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
          <button
            onClick={() => setShowAll(!showAll)}
            className="project-button"
            style={{
              padding: '12px 28px',
              fontSize: '14px',
              cursor: 'pointer',
              border: 'none'
            }}
          >
            {showAll ? (isMobile ? 'Show Less Projects' : 'Show Less Projects') : (isMobile ? 'Show More Projects' : 'Show All Projects')}
          </button>
        </div>
      )}
    </section>
  )
}

export default ProjectsSection
