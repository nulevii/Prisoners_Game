import { MutableRefObject } from 'react'
import { animateRain, createRain } from './entities/rain'
import {
  RAIN_NUM
} from './constants'
import { animateLightning, Lightning } from './entities/lightning'

export const createRainFrame = (rainCanvasRefs: MutableRefObject<HTMLCanvasElement[]>, rainAnimationRef: MutableRefObject<number | null>): () => void => {
  const [rainTroughCanvas, rainCanvas, lightningCanvas] = rainCanvasRefs.current
  const [rainCtx, lightningCtx] = rainCanvasRefs.current.map(canvas => canvas?.getContext('2d'))

  let w = window.innerWidth
  rainTroughCanvas.width = w
  rainCanvas.width = w
  lightningCanvas.width = w
  let h = window.innerHeight
  rainTroughCanvas.height = h
  rainCanvas.height = h
  lightningCanvas.height = h

  const rain = createRain(RAIN_NUM, w, h)
  const lightning: Lightning[] = []

  const resizeRain = function (): void {
    w = window.innerWidth
    rainTroughCanvas.width = w
    rainCanvas.width = w
    lightningCanvas.width = w
    h = window.innerHeight
    rainTroughCanvas.height = h
    rainCanvas.height = h
    lightningCanvas.height = h
  }
  window.addEventListener('resize', resizeRain)

  function animation (): void {
    animateRain({ rain, rainCanvas, rainCtx, RAIN_NUM, width: w, height: h })
    animateLightning({ lightningCtx, lightning, width: w, height: h })
    rainAnimationRef.current = requestAnimationFrame(animation)
  }
  animation()
  return resizeRain
}
