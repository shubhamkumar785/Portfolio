import React, { useEffect, useRef, useState } from 'react'
import { projects } from '../data'
import { openContactForm } from '../contactForm'

const ProjectsSection = () => {
  const [active, setActive] = useState(0)
  const itemRefs = useRef([])
  // Preview screenshots are only fetched once you get near them (current + next),
  // so opening the page doesn't download all seven at once.
  const seen = useRef(new Set([0, 1]))
  seen.current.add(active)
  seen.current.add(active + 1)

  // Whichever project sits in the middle of the viewport becomes "active",
  // and the sticky preview on the left swaps to its screenshot.
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(Number(entry.target.dataset.index))
        })
      },
      { rootMargin: '-20% 0px -79% 0px' }
    )
    itemRefs.current.forEach((el) => el && io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <section className="section" id="work">
      <div className="container work-grid">
        <aside className="work-sticky reveal">
          <h2 className="work-title">Selected Work</h2>
          <p className="work-sub">
            Things I've built and shipped, from client sites with real users to side projects
            on GitHub.<span className="desktop-only"> Scroll through, and the preview follows along.</span>
          </p>

          <a
            href={projects[active].link}
            className="work-preview"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${projects[active].title}`}
          >
            {projects.map((p, i) => (
              <img
                key={p.title}
                src={seen.current.has(i) ? p.image.src : undefined}
                srcSet={seen.current.has(i) ? p.image.srcSet : undefined}
                sizes="(min-width: 1200px) 540px, 45vw"
                alt=""
                className={i === active ? 'is-active' : ''}
                loading="lazy"
                decoding="async"
              />
            ))}
            <span className="work-progress" style={{ '--p': (active + 1) / projects.length }} aria-hidden="true" />
          </a>

          <a href="#contact-form" className="work-cta" onClick={openContactForm}>
            <span className="work-cta-arrow" aria-hidden="true">↳</span> Get in touch
          </a>
        </aside>

        <ol className="work-list">
          {projects.map((project, index) => {
            return (
              <li
                key={project.title}
                ref={(el) => (itemRefs.current[index] = el)}
                data-index={index}
                data-active={index === active}
                className="work-item reveal"
              >
                <span className="work-num">{String(index + 1).padStart(2, '0')}</span>

                <img
                  className="work-item-img"
                  src={project.image.src}
                  srcSet={project.image.srcSet}
                  sizes="100vw"
                  width="1100"
                  height="688"
                  alt={`${project.title} screenshot`}
                  loading="lazy"
                  decoding="async"
                />

                <h3 className="work-item-title">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">{project.title}</a>
                </h3>
                <p className="work-item-desc">{project.description}</p>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}

export default ProjectsSection
