import { MutableRefObject } from 'react'
import { animateRain, createRain } from './entities/rain'
import { animateRainTrough, createRainTrough } from './entities/rainTrough'
import {
  RAIN_THROUGH_NUM,
  SPEED_RAIN_TROUGH,
  RAIN_NUM
} from './constants'
import { animateLightning, Lightning } from './entities/lightning'

export const createRainFrame = (rainCanvasRefs: MutableRefObject<HTMLCanvasElement[]>, rainAnimationRef: MutableRefObject<number | null>): () => void => {
  const [rainTroughCanvas, rainCanvas, lightningCanvas] = rainCanvasRefs.current
  const [rainTroughCtx, rainCtx, lightningCtx] = rainCanvasRefs.current.map(canvas => canvas?.getContext('2d'))

  let w = window.innerWidth
  rainTroughCanvas.width = w
  rainCanvas.width = w
  lightningCanvas.width = w
  let h = window.innerHeight
  rainTroughCanvas.height = h
  rainCanvas.height = h
  lightningCanvas.height = h

  const rainTrough = createRainTrough(RAIN_THROUGH_NUM, w, h)
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
    animateRainTrough({ rainTrough, rainTroughCtx, SPEED_RAIN_TROUGH, width: w, height: h })
    animateRain({ rain, rainCanvas, rainCtx, RAIN_NUM, width: w, height: h })
    animateLightning({ lightningCtx, lightning, width: w, height: h })
    rainAnimationRef.current = requestAnimationFrame(animation)
  }
  animation()
  return resizeRain
}
