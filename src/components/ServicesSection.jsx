import React from 'react'

const ServicesSection = () => {
  const services = [
    {
      title: 'Backend Development',
      description: 'Develop secure, scalable, and high-performance backend applications using modern Java technologies, clean architecture, RESTful APIs, authentication, database optimization, and cloud-ready deployment practices.',
      items: ['REST APIs', 'Spring Boot', 'Microservices', 'Spring MVC', 'JWT', 'WebSocket', 'Docker', 'AWS', 'API Gateway', 'GitHub']
    },
    {
      title: 'Full Stack Development',
      description: 'A comprehensive university management platform that integrates ERP, LMS, attendance, examinations, fee management, coding platform, notifications, and role-based dashboards for students, teachers, and administrators using a scalable microservices architecture.',
      items: ['React', 'Spring Boot', 'JWT', 'Microservices', 'API Gateway', 'WebSocket', 'Docker', 'AWS', 'Git']
    },
    {
      title: 'API Design & Development',
      description: 'Design, develop, secure, and document RESTful APIs that enable seamless communication between web applications, mobile apps, and third-party services with enterprise-level security.',
      items: ['REST APIs', 'Spring MVC', 'JSON', 'Rate Limiting', 'Postman', 'API Validation', 'Documentation']
    },
    {
      title: 'Maintenance & Support',
      description: 'Maintain, optimize, and continuously improve software through debugging, performance tuning, security enhancements, monitoring, testing, and deployment automation.',
      items: ['Git', 'GitHub', 'CI/CD', 'Docker', 'Bug Fixing', 'Mockito', 'Performance Optimization']
    },
    {
      title: 'AI Integration',
      description: 'Integrate Generative AI, Large Language Models (LLMs), and intelligent automation into modern applications to deliver conversational experiences, smart assistants, and AI-powered workflows.',
      items: ['Generative AI', 'RAG', 'LangChain4j', 'LLM Integration', 'Vector Database', 'OpenAI API', 'Spring AI', 'GitHub']
    },
    {
      title: 'Database Design',
      description: 'Design normalized, scalable, and optimized databases with efficient queries, indexing strategies, transaction management, and reliable data integrity for enterprise applications.',
      items: ['MySQL', 'MongoDB', 'Redis', 'PostgreSQL', 'Hibernate', 'JPA', 'ER Diagram', 'Query Optimization']
    }

  ]

  return (
    <section className="services-section" id="services">
      <div className="services-header">
        <span className="services-kicker">SERVICES</span>
        <h2 className="services-heading">WHAT I PROVIDE</h2>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <article key={index} className="service-card">
            <h3 className="service-title">{service.title}</h3>
            <p className="service-text">{service.description}</p>
            <div className="service-tags">
              {service.items.map((item) => (
                <span key={item} className="service-tag">{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ServicesSection