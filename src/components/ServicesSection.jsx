import React, { useState, useEffect } from 'react'

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(null)

  // Manage body scroll locking when modal is open
  useEffect(() => {
    if (activeService) {
      document.body.classList.add('modal-open')
    } else {
      document.body.classList.remove('modal-open')
    }
    return () => {
      document.body.classList.remove('modal-open')
    }
  }, [activeService])

  // Manage escape key closing modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveService(null)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const services = [
    {
      title: 'Backend Development',
      description: 'Develop secure, scalable, and high-performance backend applications using modern Java technologies, clean architecture, RESTful APIs, authentication, database optimization, and cloud-ready deployment practices.',
      items: ['REST APIs', 'Spring Boot', 'Microservices', 'Spring MVC', 'JWT', 'WebSocket', 'Docker', 'AWS', 'API Gateway', 'GitHub'],
      detailedDescription: 'Building modern, enterprise-grade server-side applications requires a deep understanding of architecture, performance, security, and scalability. I specialize in designing robust backend systems that act as the backbone of high-traffic web platforms. My focus is on creating maintainable, testable, and loosely coupled services that leverage clean coding principles and modern cloud patterns.',
      capabilities: [
        'High-performance Microservices architecture design & orchestration',
        'Secure API Gateway implementations with OAuth2/JWT authentication',
        'Real-time communication channels using WebSockets',
        'Containerized multi-service deployments with Docker & AWS EC2/ECS',
        'Thorough backend testing strategies (unit, integration, and mocking)'
      ],
      technologiesDetail: [
        { name: 'Spring Boot', description: 'Used as the core framework for building standalone, production-ready Spring applications rapidly.' },
        { name: 'Microservices', description: 'Decoupled services interacting seamlessly over lightweight REST protocols for fault tolerance and scaling.' },
        { name: 'JWT & Security', description: 'Securing API endpoints with state-of-the-art token-based authorization and granular user roles.' },
        { name: 'Cloud & Containers', description: 'Packaging applications into lightweight Docker containers and deploying them securely on AWS cloud.' }
      ]
    },
    {
      title: 'Full Stack Development',
      description: 'A comprehensive university management platform that integrates ERP, LMS, attendance, examinations, fee management, coding platform, notifications, and role-based dashboards for students, teachers, and administrators using a scalable microservices architecture.',
      items: ['React', 'Spring Boot', 'JWT', 'Microservices', 'API Gateway', 'WebSocket', 'Docker', 'AWS', 'Git'],
      detailedDescription: 'Full-stack engineering represents the synergy of a seamless frontend experience and a robust backend core. I build end-to-end applications designed to handle complex business flows (such as administrative dashboards, course planning, fee payment, and notifications). By keeping state management optimized on the client side and operations highly scalable on the server side, I ensure smooth user journeys.',
      capabilities: [
        'Interactive, component-driven client applications using React & modern state managers',
        'Seamless integration between React frontend and Spring Boot/Microservice backend API suites',
        'Role-based dynamic UI rendering for students, faculty, and administrative staff',
        'Real-time application state synchronization and notifications using WebSockets',
        'Version control management and collaborative deployments using Git & CI/CD workflows'
      ],
      technologiesDetail: [
        { name: 'React', description: 'Crafting highly responsive, interactive user interfaces with optimized state management and component structure.' },
        { name: 'Backend Integration', description: 'Linking the frontend view layer with multi-service REST APIs via centralized API Gateways.' },
        { name: 'Real-Time Communication', description: 'Using WebSockets to push live alerts, chat messages, and server-side events directly to client screens.' },
        { name: 'Docker & Cloud', description: 'Standardizing development and production setups using containers and AWS cloud infrastructure.' }
      ]
    },
    {
      title: 'API Design & Development',
      description: 'Design, develop, secure, and document RESTful APIs that enable seamless communication between web applications, mobile apps, and third-party services with enterprise-level security.',
      items: ['REST APIs', 'Spring MVC', 'JSON', 'Rate Limiting', 'Postman', 'API Validation', 'Documentation'],
      detailedDescription: 'API design is the art of creating clean, intuitive, and highly secure channels for data exchange. An API is a contract between the client and the backend; hence, it must be predictable, fast, and secure. I construct standard-compliant RESTful interfaces optimized for low latency and high security, ensuring cross-platform consumers can integrate without friction.',
      capabilities: [
        'Strict adherence to RESTful design patterns and JSON communication models',
        'Robust input validation frameworks preventing SQL injection and payload malformations',
        'Rate-limiting and IP filtering implementation to block DDoS and brute force attempts',
        'Comprehensive documentation utilizing Swagger/OpenAPI for easy developer onboarding',
        'Advanced request mapping and unit testing using Postman collections'
      ],
      technologiesDetail: [
        { name: 'REST & JSON', description: 'Designing standards-compliant, stateless endpoints that exchange clean and compact JSON payloads.' },
        { name: 'Security & Limits', description: 'Preventing service abuse by implementing IP rate-limiting, CORS policies, and request validation.' },
        { name: 'Swagger/OpenAPI', description: 'Generating detailed, interactive web documentation automatically for frictionless client integrations.' },
        { name: 'Postman Automated Testing', description: 'Validating responses, performance limits, and authorization flows via pre-configured test suites.' }
      ]
    },
    {
      title: 'Maintenance & Support',
      description: 'Maintain, optimize, and continuously improve software through debugging, performance tuning, security enhancements, monitoring, testing, and deployment automation.',
      items: ['Git', 'GitHub', 'CI/CD', 'Docker', 'Bug Fixing', 'Mockito', 'Performance Optimization'],
      detailedDescription: 'Deploying code is only half the battle. High-quality software maintenance ensures the system remains reliable, performant, and secure long after launch. I work proactively to isolate bugs, optimize legacy code paths, upgrade dependencies, and automate deployments so development teams can release new features with high confidence.',
      capabilities: [
        'Automated CI/CD workflows utilizing GitHub Actions to run tests and trigger container builds',
        'Comprehensive test coverage using Mockito/JUnit to prevent regressions',
        'Codebase auditing to identify security vulnerabilities and deprecated dependency versions',
        'Runtime profiling to detect memory leaks, slow database queries, and thread contention',
        'Reliable version tracking and bug resolution workflows'
      ],
      technologiesDetail: [
        { name: 'CI/CD Pipelines', description: 'Automating test suites, code checks, and deployment bundles on every change via GitHub workflows.' },
        { name: 'Testing (Mockito)', description: 'Isolating code paths and writing high-fidelity mocks to achieve maximum code coverage and security.' },
        { name: 'Optimization', description: 'Profiling execution memory, database indexing, and query structures to eliminate latency bottlenecks.' },
        { name: 'Bug Mitigation', description: 'Methodical tracking of issues, trace inspection, and applying hotfixes without causing downtime.' }
      ]
    },
    {
      title: 'AI Integration',
      description: 'Integrate Generative AI, Large Language Models (LLMs), and intelligent automation into modern applications to deliver conversational experiences, smart assistants, and AI-powered workflows.',
      items: ['Generative AI', 'RAG', 'LangChain4j', 'LLM Integration', 'Vector Database', 'OpenAI API', 'Spring AI', 'GitHub'],
      detailedDescription: 'Integrating intelligence into web applications transforms simple user inputs into highly tailored interactive experiences. I build workflows that connect modern LLMs (such as OpenAI models) with enterprise data. By implementing Retrieval-Augmented Generation (RAG), I allow applications to answer questions grounded directly in specific user documents and context.',
      capabilities: [
        'Interfacing with Large Language Model APIs using industry-standard SDKs',
        'Retrieval-Augmented Generation (RAG) implementation to bypass token limits and ground answers',
        'Semantic search capabilities powered by text embeddings and Vector Databases',
        'Intelligent agent orchestration using LangChain4j and Spring AI architectures',
        'Context preservation and chat history management for seamless conversation loops'
      ],
      technologiesDetail: [
        { name: 'LLM Pipelines', description: 'Connecting applications to advanced language models like GPT-4 via secure API request structures.' },
        { name: 'RAG Workflows', description: 'Augmenting user queries with contextual local documents to generate highly accurate answers.' },
        { name: 'LangChain4j & Spring AI', description: 'Leveraging robust Java-native AI frameworks to build agents, prompts, and memory structures.' },
        { name: 'Vector Databases', description: 'Generating high-dimensional text embeddings and indexing them for fast semantic search comparisons.' }
      ]
    },
    {
      title: 'Database Design',
      description: 'Design normalized, scalable, and optimized databases with efficient queries, indexing strategies, transaction management, and reliable data integrity for enterprise applications.',
      items: ['MySQL', 'MongoDB', 'Redis', 'PostgreSQL', 'Hibernate', 'JPA', 'ER Diagram', 'Query Optimization'],
      detailedDescription: 'Data is the most valuable asset of any application. Designing a database requires balancing normalization (to prevent redundancy) and optimization (to ensure fast retrieval). I design high-performance relational and non-relational database architectures, configure efficient indices, and write optimized queries to manage high data loads with total integrity.',
      capabilities: [
        'Structured database schemas designed via rigorous Entity-Relationship (ER) modeling',
        'Data caching systems using Redis to minimize direct database hits and lower server load',
        'Advanced indexing (B-Tree, GIN) and query tuning to reduce milliseconds on complex joins',
        'Strict ACID compliance and transaction isolation boundaries to guarantee data integrity',
        'ORM configuration using Hibernate and JPA for clean object mappings and lazy-loading safety'
      ],
      technologiesDetail: [
        { name: 'MySQL & PostgreSQL', description: 'Relational engines used for structured data requiring strong relationships and transaction safety.' },
        { name: 'NoSQL (MongoDB)', description: 'Implementing flexible, scale-out document data models for dynamic data structures.' },
        { name: 'Redis Caching', description: 'Deploying high-speed in-memory caches to offload repetitive SQL queries and keep latency below 10ms.' },
        { name: 'JPA & Hibernate', description: 'Mapping database schemas to Java objects with pre-optimized fetching and relationship configurations.' }
      ]
    }
  ]

  const closeModal = () => setActiveService(null)

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('services-modal-overlay')) {
      closeModal()
    }
  }

  return (
    <section className="services-section" id="services">
      <div className="services-header">
        <span className="services-kicker">SERVICES</span>
        <h2 className="services-heading">WHAT I PROVIDE</h2>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <article 
            key={index} 
            className="service-card"
            onClick={() => setActiveService(service)}
          >
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

      {activeService && (
        <div className="services-modal-overlay animate-fade-in" onClick={handleOverlayClick}>
          <div className="services-modal-content animate-slide-up">
            <button className="services-modal-close" onClick={closeModal} aria-label="Close modal">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            
            <div className="services-modal-body">
              <div className="services-modal-left">
                <span className="services-modal-kicker">SERVICE OVERVIEW</span>
                <h3 className="services-modal-title">{activeService.title}</h3>
                <div className="services-modal-divider"></div>
                <p className="services-modal-text-lead">{activeService.detailedDescription}</p>
                
                <h4 className="services-modal-section-title">Key Capabilities</h4>
                <ul className="services-modal-capabilities">
                  {activeService.capabilities.map((cap, idx) => (
                    <li key={idx} className="services-modal-capability-item">
                      <span className="capability-bullet">→</span>
                      <span className="capability-text">{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="services-modal-right">
                <h4 className="services-modal-section-title">Technology Ecosystem</h4>
                <div className="services-modal-tech-list">
                  {activeService.technologiesDetail.map((tech, idx) => (
                    <div key={idx} className="services-modal-tech-card">
                      <div className="services-modal-tech-header">
                        <span className="services-modal-tech-bullet">•</span>
                        <h5 className="services-modal-tech-name">{tech.name}</h5>
                      </div>
                      <p className="services-modal-tech-desc">{tech.description}</p>
                    </div>
                  ))}
                </div>

                <div className="services-modal-all-tags-section">
                  <h4 className="services-modal-section-title small-title">Related Technologies</h4>
                  <div className="services-modal-all-tags">
                    {activeService.items.map((item) => (
                      <span key={item} className="services-modal-tag">{item}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default ServicesSection