import 'intersection-observer'

import { useRef, useState, useLayoutEffect } from 'react'

const createObserver = (handler, margin, threshold) => {
  const options = {
    root: null,
    rootMargin: margin,
    threshold
  }
  const observer = new window.IntersectionObserver(handler, options)
  return observer
}

const useIntersectionObserver = (margin, threshold) => {
  const [firstEvent, setFirstEvent] = useState(false)
  const ref = useRef()
  useLayoutEffect(() => {
    const handler = events => {
      setFirstEvent(events[0])
    }
    const observer = createObserver(handler, margin, threshold)

    if (ref.current) {
      observer.observe(ref.current)
    }
    return () => observer.disconnect()
  }, [setFirstEvent, margin, threshold])

  return [ref, firstEvent]
}

export default useIntersectionObserver
