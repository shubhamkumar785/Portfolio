import React from 'react'
import campussetuImg from '../assets/images/campussetu.png'
import chatassistantImg from '../assets/images/chatassistant.png'
import ecommerceImg from '../assets/images/emmorce.png'
import feemanagementImg from '../assets/images/feemanagement.png'
import portfolioImg from '../assets/images/portfolio.png'

const ProjectsSection = () => {
  const projects = [
    {
      title: "CampusSetu",
      category: "Full Stack",
      description: "A smart campus management platform for students and faculty with real-time features.",
      technologies: ["Java", "Spring Boot", "Microservice", "AWS", "Docker", "GitHub", "WebSocket", "MySQL", "React"],
      link: "#",
      image: campussetuImg
    },
    {
      title: "E-Zone",
      category: "Full Stac",
      description: "A full-stack university ERP with secure authentication, role-based dashboards, and real-time communication.",
      technologies: ["Spring Boot","React", "Microservices", "JWT", "API-Gateway", "WebSocket", "MySQL", "AWS", "Git", "GitHub", "Docker", "Ci/Cd"],
      link: "#",
      image: null
    },
    {
      title: "ECommerce",
      category: "Full Stack",
      description: "A scalable eCommerce platform with authentication, cart, and payment integration.",
      technologies: ["Java", "Spring Boot", "REST API", "MongoDB", "JWT", "AWS", "Git", "GitHub", "Docker"],
      link: "#",
      image: ecommerceImg
    },
    {
      title: "Fee Management System",
      category: "Web Application",
      description: "A system to manage student fee records, payments, and reports efficiently.",
      technologies: ["Java", "Swing GUI Framework", "GitHub", "JDBC", "MySQL"],
      link: "#",
      image: feemanagementImg
    },
    {
      title: "Portfolio",
      category: "Frontend",
      description: "A modern developer portfolio showcasing skills, projects, and experience.",
      technologies: ["HTML", "CSS", "JS", "React", "GitHub", "Git", "vercel"],
      link: "#",
      image: portfolioImg
    },
    {
      title: "Chat Assistant",
      category: "AI / Web App",
      description: "An AI-powered chat assistant with voice and text interaction capabilities.",
      technologies: ["Python", "Open AI", "LLM", "RAG", "Flask", "API"],
      link: "#",
      image: chatassistantImg
    }
  ]

  return (
    <section className="projects-section" id="works">
      <div className="projects-header">
        <h2 className="projects-heading">IDEAS BROUGHT TO LIFE</h2>
      </div>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
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
              <a href={project.link} className="project-button">View Project →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection
