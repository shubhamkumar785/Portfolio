import React from 'react'
import resumePdf from '../assets/images/resume.pdf'
import PaytmLogo from './PaytmLogo'

const experience = [
  {
    period: 'Aug 2026 - Present',
    role: 'Software Developer',
    description:
      'Building and maintaining backend services for payments with Java, Spring Boot and microservices. Also working on Gen AI integrations that make internal workflows smarter.',
    company: 'Paytm',
    logo: <PaytmLogo className="paytm-logo exp-logo" />,
  },
  {
    period: '2026 - Present',
    role: 'Freelance Developer',
    description:
      'Building websites and backends for small businesses, like poonamprinting.in, from the first call through to deployment and support after launch.',
    company: 'Freelance',
    logo: (
      <span className="exp-org">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ color: 'var(--accent)' }}>
          <rect x="3" y="7" width="18" height="13" rx="2" />
          <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18" />
        </svg>
        Self-employed
      </span>
    ),
  },
  {
    period: '2023 - Present',
    role: 'Student, B.Tech CSE',
    description:
      'Studying Computer Science & Engineering. Most of what I know about building software came from projects done alongside the coursework: ERPs, campus platforms and client sites.',
    company: 'Sharda University',
    logo: (
      <span className="exp-org">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M22 9 12 4 2 9l10 5 10-5z" />
          <path d="M6 11v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5" />
        </svg>
        Sharda University
      </span>
    ),
  },
]

const ExperienceSection = () => {
  return (
    <section className="section exp-section" id="experience">
      <div className="container">
        <header className="exp-head reveal">
          <h2 className="exp-title">Experience</h2>
          <a href={resumePdf} className="exp-cv" target="_blank" rel="noopener noreferrer">
            Download CV
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 4v11M7 10l5 5 5-5M5 20h14" />
            </svg>
          </a>
        </header>

        <ol className="exp-list">
          {experience.map((job) => (
            <li key={job.period} className="exp-row reveal">
              <span className="exp-period">{job.period}</span>
              <div className="exp-body">
                <h3 className="exp-role">{job.role}</h3>
                <p className="exp-desc">{job.description}</p>
              </div>
              <span className="exp-company" aria-label={job.company}>{job.logo}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default ExperienceSection
