import { throttle } from 'throttle-typescript'

export const setTextShadow = function (): void {
  const elements = Array.from(document.getElementsByClassName('menuBtn') as HTMLCollectionOf<HTMLElement>)
  elements.forEach(element => {
    if (element != null) {
      const { x, y, width, height } = element.getBoundingClientRect()
      document.addEventListener('mousemove', throttle((info) => {
        const mouseX = info.clientX
        const mouseY = info.clientY
        const shadow = { x: x - mouseX + width / 2, y: y - mouseY + height / 2 }
        const xval = Math.abs(shadow.x)
        const yval = Math.abs(shadow.y)
        element.style.filter = `drop-shadow(0 0 2px #000000) drop-shadow(0 0 3px #000000) drop-shadow(${shadow.x}px ${shadow.y}px ${Math.max(
              Math.max(xval, yval),
              1
            )}px black)`
      }, 50))
    }
  })
}
