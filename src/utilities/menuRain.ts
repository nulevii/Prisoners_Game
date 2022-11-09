export const menuRain = function (isRain: boolean): void {
  const canvas1 = document.getElementById('rainCanvas1') as HTMLCanvasElement
  const canvas2 = document.getElementById('rainCanvas2') as HTMLCanvasElement
  const canvas3 = document.getElementById('rainCanvas3') as HTMLCanvasElement
  const ctx1 = canvas1.getContext('2d')
  const ctx2 = canvas2.getContext('2d')
  const ctx3 = canvas3.getContext('2d')

  const rainthroughnum: number = 500
  const speedRainTrough: number = 15
  const RainTrough: Array<{ x: number, y: number, length: number, opacity: number, xs: number, ys: number }> = []

  const rainnum: number = 500
  const rain: Array<{ x: number, y: number, l: number, xs: number, ys: number }> = []

  const lightning: Array<{ x: number, y: number, xRange: number, yRange: number, path: [{ x: number, y: number }], number: number, pathLimit: number }> = []
  let lightTimeCurrent: number = 0
  let lightTimeTotal: number = 0

  let w = window.innerWidth
  canvas1.width = w
  canvas2.width = w
  canvas3.width = w
  let h = window.innerHeight
  canvas1.height = h
  canvas2.height = h
  canvas3.height = h
  window.addEventListener('resize', function () {
    w = window.innerWidth
    canvas1.width = w
    canvas2.width = w
    canvas3.width = w
    h = window.innerHeight
    canvas1.height = h
    canvas2.height = h
    canvas3.height = h
  })

  function random (min: number, max: number): number {
    return Math.random() * (max - min + 1) + min
  }

  function clearcanvas1 (): void {
    ctx1?.clearRect(0, 0, w, h)
  }

  function clearcanvas2 (): void {
    ctx2?.clearRect(0, 0, canvas2?.width, canvas2?.height)
  }

  function clearCanvas3 (): void {
    if (ctx3 !== null) {
      ctx3.globalCompositeOperation = 'destination-out'
      ctx3.fillStyle = 'rgba(0,0,0,' + String(random(1, 30) / 100) + ')'
      ctx3.fillRect(0, 0, w, h)
      ctx3.globalCompositeOperation = 'source-over'
    }
  }

  function createRainTrough (): void {
    for (let i = 0; i < rainthroughnum; i++) {
      RainTrough[i] = {
        x: random(0, w),
        y: random(0, h),
        length: Math.floor(random(1, 830)),
        opacity: Math.random() * 0.2,
        xs: random(-2, 2),
        ys: random(10, 20)
      }
    }
  }

  function createRain (): void {
    for (let i = 0; i < rainnum; i++) {
      rain[i] = {
        x: Math.random() * w,
        y: Math.random() * h,
        l: Math.random() * 1,
        xs: -4 + Math.random() * 4 + 2,
        ys: Math.random() * 10 + 10
      }
    }
  }

  function createLightning (): void {
    const x = random(100, w - 100)
    const y = random(0, h / 4)

    const createCount = random(1, 3)
    for (let i = 0; i < createCount; i++) {
      const single: { x: number, y: number, xRange: number, yRange: number, path: [{ x: number, y: number }], number: number, pathLimit: number } = {
        x,
        y,
        xRange: random(5, 30),
        yRange: random(10, 25),
        path: [{
          x,
          y
        }],
        number: 0,
        pathLimit: random(40, 55)
      }
      lightning.push(single)
    }
  }

  function drawRainTrough (i: number): void {
    ctx1?.beginPath()
    const grd: any = ctx1?.createLinearGradient(0, RainTrough[i].y, 0, RainTrough[i].y + RainTrough[i].length)
    if (grd !== undefined) {
      grd.addColorStop(0, 'rgba(255,255,255,0)')
      grd.addColorStop(1, 'rgba(255,255,255,' + RainTrough[i].opacity.toString() + ')')
    }
    if (ctx1 !== null) {
      ctx1.fillStyle = grd
      ctx1.fillRect(RainTrough[i].x, RainTrough[i].y, 1, RainTrough[i].length)
      ctx1.fill()
    }
  }

  function drawRain (i: number): void {
    ctx2?.beginPath()
    ctx2?.moveTo(rain[i].x, rain[i].y)
    ctx2?.lineTo(rain[i].x + rain[i].l * rain[i].xs, rain[i].y + rain[i].l * rain[i].ys)
    if (ctx2 !== null) {
      ctx2.strokeStyle = 'rgba(174,194,224,0.5)'
      ctx2.lineWidth = 1
      ctx2.lineCap = 'round'
      ctx2.stroke()
    }
  }

  function drawLightning (): void {
    for (let i = 0; i < lightning.length; i++) {
      const light: { path: [{ x: number, y: number }], x: number, y: number, pathLimit: number, xRange: number, yRange: number } = lightning[i]

      light.path.push({
        x: light.path[light.path.length - 1].x + (random(0, light.xRange) - (light.xRange / 2)),
        y: light.path[light.path.length - 1].y + (random(0, light.yRange))
      })

      if (light.path.length > light.pathLimit) {
        lightning.splice(i, 1)
      }

      if (ctx3 !== null) {
        ctx3.strokeStyle = 'rgba(255, 255, 255, .1)'
        ctx3.lineWidth = 3
        if (random(0, 15) === 0) {
          ctx3.lineWidth = 6
        }
        if (random(0, 30) === 0) {
          ctx3.lineWidth = 8
        }
        ctx3.beginPath()
        ctx3.moveTo(light.x, light.y)
        for (let pc = 0; pc < light.path.length; pc++) {
          ctx3?.lineTo(light.path[pc].x, light.path[pc].y)
        }
        if (Math.floor(random(0, 30)) === 1) {
          ctx3.fillStyle = 'rgba(255, 255, 255, ' + String(random(1, 3) / 100) + ')'
          ctx3.fillRect(0, 0, w, h)
        }
        ctx3.lineJoin = 'miter'
        ctx3.stroke()
      }
    }
  }
  function animateRainTrough (): void {
    clearcanvas1()
    for (let i = 0; i < rainthroughnum; i++) {
      if (RainTrough[i].y >= h) {
        RainTrough[i].y = h - RainTrough[i].y - RainTrough[i].length * 5
      } else {
        RainTrough[i].y += speedRainTrough
      }
      drawRainTrough(i)
    }
  }

  function animateRain (): void {
    clearcanvas2()
    for (let i = 0; i < rainnum; i++) {
      rain[i].x += rain[i].xs
      rain[i].y += rain[i].ys
      if (rain[i].x > w || rain[i].y > h) {
        rain[i].x = Math.random() * w
        rain[i].y = -20
      }
      drawRain(i)
    }
  }

  function animateLightning (): void {
    clearCanvas3()
    lightTimeCurrent++
    if (lightTimeCurrent >= lightTimeTotal) {
      createLightning()
      lightTimeCurrent = 0
      lightTimeTotal = 200
    }
    drawLightning()
  }

  function init (): void {
    createRainTrough()
    createRain()
    window.addEventListener('resize', createRainTrough)
  }
  init()

  function animloop (): void {
    if (isRain) { return }
    animateRainTrough()
    animateRain()
    animateLightning()
    requestAnimationFrame(animloop)
  }
  animloop()
}
