import { useEffect } from 'react'
import clickSound from '../../../assets/audio/flashlight-click.mp3'
import { playSound } from '../../playSound'
import { setCustomCursor } from './customCursor'

const onMouseDown = (): void => {
  BODY?.classList.add('light-of')
  playSound(clickSound)
}

const onMouseUp = (): void => {
  BODY?.classList.remove('light-of')
  playSound(clickSound)
}

const BODY = document.querySelector('body')
function useMouseEffects (): void {
  useEffect(() => {
    document.addEventListener('mousemove', setCustomCursor)
    document.addEventListener('touchmove', setCustomCursor)
    document.addEventListener('mousedown', onMouseDown)
    document.addEventListener('mouseup', onMouseUp)
    return () => {
      document.removeEventListener('mousemove', setCustomCursor)
      document.removeEventListener('touchmove', setCustomCursor)
      document.removeEventListener('mousedown', onMouseDown)
      document.removeEventListener('mouseup', onMouseUp)
    }
  }, [])
}

export default useMouseEffects
