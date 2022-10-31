export const setCustomCursor: (e: MouseEvent | TouchEvent) => void = (
  e: MouseEvent | TouchEvent
) => {
  if (e instanceof MouseEvent) {
    const x = String(e.clientX)
    const y = String(e.clientY)
    document.documentElement.style.setProperty('--cursorX', x + 'px')
    document.documentElement.style.setProperty('--cursorY', y + 'px')
  } else {
    const x = String(e.touches[0].clientX)
    const y = String(e.touches[0].clientY)
    document.documentElement.style.setProperty('--cursorX', x + 'px')
    document.documentElement.style.setProperty('--cursorY', y + 'px')
  }
}
