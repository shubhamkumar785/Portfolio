import { useEffect } from 'react'

/**
 * Hook that uses IntersectionObserver to add 'in-view' class
 * to elements with scroll animation classes when they enter the viewport.
 */
const useScrollAnimation = () => {
  useEffect(() => {
    const selectors = [
      '.anim-from-left',
      '.anim-from-right',
      '.anim-from-bottom',
    ]

    const elements = document.querySelectorAll(selectors.join(','))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            // Only animate once
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    )

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}

export default useScrollAnimation
