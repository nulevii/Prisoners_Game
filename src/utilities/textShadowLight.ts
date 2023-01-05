import { useEffect, useRef, RefObject } from 'react'

export const useAddShadowLight = (): RefObject<HTMLButtonElement[]> => {
  const textShadowRefs = useRef<HTMLButtonElement []>([])

  const createShadows = (info: MouseEvent, element: HTMLElement): void => {
    const { x, y, width, height } = element.getBoundingClientRect()
    const mouseX = info.clientX
    const mouseY = info.clientY
    const shadow = {
      x: x - mouseX + width / 2,
      y: y - mouseY + height / 2
    }
    const xval = Math.abs(shadow.x)
    const yval = Math.abs(shadow.y)
    if (
      element.offsetLeft - mouseX < 100 &&
        element.offsetLeft - mouseX > -100 &&
        element.offsetTop - mouseY < 150 &&
        element.offsetTop - mouseY > -150
    ) {
      element.style.filter = `drop-shadow(${
          shadow.x
        }px ${shadow.y}px ${Math.max(Math.max(xval, yval), 1)}px black)`
    }
  }

  const addShadowListener = (element: HTMLElement) => (event: MouseEvent) =>
    createShadows(event, element)
  useEffect(() => {
    const fns = textShadowRefs.current.map((element) => {
      const fn = addShadowListener(element)
      document.addEventListener('mousemove', fn)
      return fn
    })
    return () => {
      textShadowRefs.current.forEach((_, index) => {
        document.removeEventListener('mousemove', fns[index])
      })
    }
  }
  )
  return textShadowRefs
}
