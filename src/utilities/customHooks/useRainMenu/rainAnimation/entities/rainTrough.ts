import { RAIN_THROUGH_NUM } from '../constants'
import { random } from '../other'

interface RainTrough {
  x: number
  y: number
  length: number
  opacity: number
  xs: number
  ys: number
}

function clearRainTroughCanvas (rainTroughCtx: CanvasRenderingContext2D | null, w: number, h: number): void {
  rainTroughCtx?.clearRect(0, 0, w, h)
}

export function createRainTrough (RAIN_THROUGH_NUM: number, w: number, h: number): RainTrough[] {
  return Array.from({ length: RAIN_THROUGH_NUM }, () => ({
    x: random(0, w),
    y: random(0, h),
    length: Math.floor(random(1, 830)),
    opacity: Math.random() * 0.2,
    xs: random(-2, 2),
    ys: random(10, 20)
  }))
}

function drawRainTrough (rainTrough: RainTrough[], rainTroughCtx: CanvasRenderingContext2D | null, i: number): void {
  rainTroughCtx?.beginPath()
  const grd = rainTroughCtx?.createLinearGradient(
    0,
    rainTrough[i].y,
    0,
    rainTrough[i].y + rainTrough[i].length
  )
  if (grd !== undefined) {
    grd.addColorStop(0, 'rgba(255,255,255,0)')
    grd.addColorStop(
      1,
      'rgba(255,255,255,' + rainTrough[i].opacity.toString() + ')'
    )
  }
  if (rainTroughCtx !== null && (grd != null)) {
    rainTroughCtx.fillStyle = grd
    rainTroughCtx.fillRect(
      rainTrough[i].x,
      rainTrough[i].y,
      1,
      rainTrough[i].length
    )
    rainTroughCtx.fill()
  }
}

export function animateRainTrough ({ rainTrough, rainTroughCtx, SPEED_RAIN_TROUGH, width, height }: {
  rainTrough: RainTrough[]
  rainTroughCtx: CanvasRenderingContext2D | null
  SPEED_RAIN_TROUGH: number
  width: number
  height: number
}): void {
  clearRainTroughCanvas(rainTroughCtx, width, height)

  for (let i = 0; i < RAIN_THROUGH_NUM; i++) {
    if (rainTrough[i].y >= height) {
      rainTrough[i].y = height - rainTrough[i].y - rainTrough[i].length * 5
    } else {
      rainTrough[i].y += SPEED_RAIN_TROUGH
    }
    drawRainTrough(rainTrough, rainTroughCtx, i)
  }
}
