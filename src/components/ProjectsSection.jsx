import React from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'
import campussetuImg from '../assets/images/campussetu.png'
import ecommerceImg from '../assets/images/emmorce.png'
import feemanagementImg from '../assets/images/feemanagement.png'
import portfolioImg from '../assets/images/portfolio.png'
import nestLivingImg from '../assets/images/nestliving.png'
import ezoneImg from '../assets/images/ezoneImg.png'

const ProjectsSection = () => {
  useScrollAnimation()
  const projects = [
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
      technologies: ["Spring Boot","React", "Microservices", "JWT", "API-Gateway", "WebSocket", "MySQL", "AWS", "Git", "GitHub", "Docker", "Ci/Cd"],
      link: "https://github.com/shubhamkumar785/Ezone-University",
      image: ezoneImg
    },
    {
  title: "NestLiving",
  category: "Full Stack",
  description: "A modern Home & Lifestyle eCommerce platform for furniture, home décor, lighting, ceramics, and premium living essentials with secure authentication, product catalog, cart, wishlist, and seamless checkout.",
  technologies: ["Java","Spring Boot","React","MySQL","Hibernate","JPA","Spring Security","JWT","REST API","AWS","Git","GitHub"],
  link: "https://github.com/shubhamkumar785/nestliving",
  image: nestLivingImg
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

  return (
    <section className="projects-section" id="works">
      <div className="projects-header reveal-up">
        <h2 className="projects-heading">IDEAS BROUGHT TO LIFE</h2>
      </div>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className={`project-card ${index % 2 === 0 ? 'anim-from-left' : 'anim-from-right'} anim-delay-${(index % 3) + 1}`}>
            {project.image ? (
              <img src={project.image} alt={project.title} className="project-image" />
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
              <a href={project.link} className="project-button" target="_blank" rel="noopener noreferrer">View Project →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection
