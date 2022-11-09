
export const addShadow = (
  info: MouseEvent,
  element: HTMLElement
): void => {
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
    element.style.filter = `drop-shadow(0 0 2px #000000) drop-shadow(0 0 3px #000000) drop-shadow(${
        shadow.x
      }px ${shadow.y}px ${Math.max(Math.max(xval, yval), 1)}px black)`
  }
}
