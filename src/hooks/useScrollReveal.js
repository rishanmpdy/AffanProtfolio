// src/hooks/useScrollReveal.js
// Returns a ref + boolean `inView` for scroll-triggered animations.
 
import { useEffect, useRef, useState } from 'react'
 
/**
 * @param {IntersectionObserverInit} options
 * @returns {{ ref: React.RefObject, inView: boolean }}
 */
export function useScrollReveal(options = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
 
  useEffect(() => {
    const el = ref.current
    if (!el) return
 
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect() // fire only once
        }
      },
      { threshold: 0.15, ...options }
    )
 
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
 
  return { ref, inView }
}
