import { useEffect, useRef, useState } from 'react'

function useScrollReveal() {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return undefined

    if (!('IntersectionObserver' in window)) {
      setIsVisible(true)
      return undefined
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        observer.unobserve(entry.target)
      }
    }, { threshold: 0.12, rootMargin: '0px 0px -5% 0px' })

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return { ref, isVisible }
}

export default useScrollReveal
