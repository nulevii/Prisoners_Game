interface Rain {
  x: number
  y: number
  l: number
  xs: number
  ys: number
}

function clearRainCanvas (rainCtx: CanvasRenderingContext2D | null, rainCanvas: HTMLCanvasElement): void {
  rainCtx?.clearRect(0, 0, rainCanvas?.width, rainCanvas?.height)
}

export function createRain (RAIN_NUM: number, w: number, h: number): Rain[] {
  return Array.from({ length: RAIN_NUM }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    l: Math.random() * 1,
    xs: -4 + Math.random() * 4 + 2,
    ys: Math.random() * 10 + 10
  }))
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

export function animateRain ({ rain, rainCanvas, rainCtx, RAIN_NUM, width, height }: {
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
