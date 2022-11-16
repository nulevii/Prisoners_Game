import { LIGHTNING_INTERVAL } from '../constants'
import { debounce, random } from '../other'

export interface Lightning {
  x: number
  y: number
  xRange: number
  yRange: number
  path: [{ x: number, y: number }]
  number: number
  pathLimit: number
}

function clearLightningCanvas (lightningCtx: CanvasRenderingContext2D | null, w: number, h: number): void {
  if (lightningCtx !== null) {
    lightningCtx.globalCompositeOperation = 'destination-out'
    lightningCtx.fillStyle = 'rgba(0,0,0,' + String(random(1, 30) / 100) + ')'
    lightningCtx.fillRect(0, 0, w, h)
    lightningCtx.globalCompositeOperation = 'source-over'
  }
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

const debouncedCreateLightning = debounce(createLightning, LIGHTNING_INTERVAL)

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

export function animateLightning ({ lightningCtx, lightning, width, height }: { lightningCtx: CanvasRenderingContext2D | null, lightning: Lightning[], width: number, height: number }): void {
  clearLightningCanvas(lightningCtx, width, height)
  debouncedCreateLightning(lightning, width, height)
  drawLightning(lightningCtx, lightning, width, height)
}
