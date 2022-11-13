import { MutableRefObject, useEffect, useRef } from 'react'

import { createRainFrame } from './rainAnimation'
function useRainMenu (

): any {
  const rainCanvasRefs = useRef<HTMLCanvasElement[]>([])
  const rainConditionRef: MutableRefObject<number | null> = useRef(null)

  useEffect(() => {
    const resizeRain = createRainFrame(rainCanvasRefs, rainConditionRef)
    return () => {
      rainConditionRef.current !== null && cancelAnimationFrame(rainConditionRef.current)
      removeEventListener('resize', resizeRain)
    }
  }, [])
  return rainCanvasRefs
}

export default useRainMenu
