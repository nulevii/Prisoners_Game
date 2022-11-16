import { useEffect } from 'react'
import clickSound from '../../../assets/audio/flashlight-click.mp3'
import { playSound } from '../../playSound'
import { setCustomCursor } from './customCursor'

const BODY = document.querySelector('body')
function useMouseEffects (): void {
  useEffect(() => {
    document.addEventListener('mousemove', setCustomCursor)
    document.addEventListener('touchmove', setCustomCursor)
    document.addEventListener('mousedown', () => {
      BODY?.classList.add('light-of')
      playSound(clickSound)
    })
    document.addEventListener('mouseup', () => {
      BODY?.classList.remove('light-of')
      playSound(clickSound)
    })
    return () => {
      document.removeEventListener('mousemove', setCustomCursor)
      document.removeEventListener('touchmove', setCustomCursor)
    }
  }, [])
}

export default useMouseEffects
