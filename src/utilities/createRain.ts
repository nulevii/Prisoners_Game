import { MutableRefObject } from 'react'

const RAIN_THROUGH_NUM: number = 500
const SPEED_RAIN_TROUGH: number = 15
const RAIN_NUM: number = 500
const lightningInterval = 2000

interface RainTrough {
  x: number
  y: number
  length: number
  opacity: number
  xs: number
  ys: number
}
interface Rain {
  x: number
  y: number
  l: number
  xs: number
  ys: number
}
interface Lightning {
  x: number
  y: number
  xRange: number
  yRange: number
  path: [{ x: number, y: number }]
  number: number
  pathLimit: number
}
// general purpose fns
function random (min: number, max: number): number {
  return Math.random() * (max - min + 1) + min
}

function debounce<F extends (...args: Parameters<F>) => ReturnType<F>> (
  f: F,
  ms: number
): (...args: Parameters<F>) => void {
  let timeout: null | NodeJS.Timeout = null

  return function (...args: Parameters<F>): void {
    if (timeout !== null) return

    f(...args)

    timeout = setTimeout(() => (timeout = null), ms)
  }
}
// clear canvas fns
function clearRainTroughCanvas (rainTroughCtx: CanvasRenderingContext2D | null, w: number, h: number): void {
  rainTroughCtx?.clearRect(0, 0, w, h)
}

function clearRainCanvas (rainCtx: CanvasRenderingContext2D | null, rainCanvas: HTMLCanvasElement): void {
  rainCtx?.clearRect(0, 0, rainCanvas?.width, rainCanvas?.height)
}

function clearLightningCanvas (lightningCtx: CanvasRenderingContext2D | null, w: number, h: number): void {
  if (lightningCtx !== null) {
    lightningCtx.globalCompositeOperation = 'destination-out'
    lightningCtx.fillStyle = 'rgba(0,0,0,' + String(random(1, 30) / 100) + ')'
    lightningCtx.fillRect(0, 0, w, h)
    lightningCtx.globalCompositeOperation = 'source-over'
  }
}

// create canvas fns
function createRainTrough (RAIN_THROUGH_NUM: number, w: number, h: number): RainTrough[] {
  return Array.from({ length: RAIN_THROUGH_NUM }, () => ({
    x: random(0, w),
    y: random(0, h),
    length: Math.floor(random(1, 830)),
    opacity: Math.random() * 0.2,
    xs: random(-2, 2),
    ys: random(10, 20)
  }))
}

function createRain (RAIN_NUM: number, w: number, h: number): Rain[] {
  return Array.from({ length: RAIN_NUM }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    l: Math.random() * 1,
    xs: -4 + Math.random() * 4 + 2,
    ys: Math.random() * 10 + 10
  }))
}

function createLightning (lightning: Lightning[], w: number, h: number): void {
  const x = random(100, w - 100)
  const y = random(0, h / 4)

  const createCount = random(1, 3)
  for (let i = 0; i < createCount; i++) {
    const single: {
      x: number
      y: number
      xRange: number
      yRange: number
      path: [{ x: number, y: number }]
      number: number
      pathLimit: number
    } = {
      x,
      y,
      xRange: random(5, 30),
      yRange: random(10, 25),
      path: [
        {
          x,
          y
        }
      ],
      number: 0,
      pathLimit: random(40, 55)
    }
    lightning.push(single)
  }
}

const debouncedCreateLightning = debounce(createLightning, lightningInterval)

// draw fns
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

function drawRain (rain: Rain[], rainCtx: CanvasRenderingContext2D | null, i: number): void {
  rainCtx?.beginPath()
  rainCtx?.moveTo(rain[i].x, rain[i].y)
  rainCtx?.lineTo(
    rain[i].x + rain[i].l * rain[i].xs,
    rain[i].y + rain[i].l * rain[i].ys
  )
  if (rainCtx !== null) {
    rainCtx.strokeStyle = 'rgba(174,194,224,0.5)'
    rainCtx.lineWidth = 1
    rainCtx.lineCap = 'round'
    rainCtx.stroke()
  }
}

function drawLightning (lightningCtx: CanvasRenderingContext2D | null, lightning: Lightning[], w: number, h: number): void {
  for (let i = 0; i < lightning.length; i++) {
    const light: {
      path: [{ x: number, y: number }]
      x: number
      y: number
      pathLimit: number
      xRange: number
      yRange: number
    } = lightning[i]

    light.path.push({
      x:
                light.path[light.path.length - 1].x +
                (random(0, light.xRange) - light.xRange / 2),
      y: light.path[light.path.length - 1].y + random(0, light.yRange)
    })

    if (light.path.length > light.pathLimit) {
      lightning.splice(i, 1)
    }

    if (lightningCtx !== null) {
      lightningCtx.strokeStyle = 'rgba(255, 255, 255, .1)'
      lightningCtx.lineWidth = 3
      if (random(0, 15) === 0) {
        lightningCtx.lineWidth = 6
      }
      if (random(0, 30) === 0) {
        lightningCtx.lineWidth = 8
      }
      lightningCtx.beginPath()
      lightningCtx.moveTo(light.x, light.y)
      for (let pc = 0; pc < light.path.length; pc++) {
        lightningCtx?.lineTo(light.path[pc].x, light.path[pc].y)
      }
      if (Math.floor(random(0, 30)) === 1) {
        lightningCtx.fillStyle =
                    'rgba(255, 255, 255, ' + String(random(1, 3) / 100) + ')'
        lightningCtx.fillRect(0, 0, w, h)
      }
      lightningCtx.lineJoin = 'miter'
      lightningCtx.stroke()
    }
  }
}

// animate fns
function animateRainTrough ({ rainTrough, rainTroughCtx, SPEED_RAIN_TROUGH, width, height }: {
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

function animateRain ({ rain, rainCanvas, rainCtx, RAIN_NUM, width, height }: {
  rain: Rain[]
  rainCanvas: HTMLCanvasElement
  rainCtx: CanvasRenderingContext2D | null
  RAIN_NUM: number
  width: number
  height: number
}): void {
  clearRainCanvas(rainCtx, rainCanvas)
  for (let i = 0; i < RAIN_NUM; i++) {
    rain[i].x += rain[i].xs
    rain[i].y += rain[i].ys
    if (rain[i].x > width || rain[i].y > height) {
      rain[i].x = Math.random() * width
      rain[i].y = -20
    }
    drawRain(rain, rainCtx, i)
  }
}

function animateLightning ({ lightningCtx, lightning, width, height }: { lightningCtx: CanvasRenderingContext2D | null, lightning: Lightning[], width: number, height: number }): void {
  clearLightningCanvas(lightningCtx, width, height)

  debouncedCreateLightning(lightning, width, height)
  drawLightning(lightningCtx, lightning, width, height)
}

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
