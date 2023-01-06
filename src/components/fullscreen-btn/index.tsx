import React, { useEffect, useState } from 'react'
import { useAddShadow } from '../../utilities/textShadow'

const FullScreenBtn: React.FC = () => {
  const [isFullScreen, setIsFullScreen] = useState(false)
  const textShadowRefs = useAddShadow()

  useEffect(() => {
    document.addEventListener('fullscreenchange', checkFullscreen)
    return () => {
      document.removeEventListener('fullscreenchange', checkFullscreen)
    }
  }, [])

  function toggleFullscreen (): void {
    if (document.fullscreenElement != null) {
      void document.exitFullscreen()
    } else {
      void document.documentElement.requestFullscreen()
    }
  }

  function checkFullscreen (): void {
    setIsFullScreen(prevState => !prevState)
  }

  return (<button ref={(el) => { textShadowRefs.current![0] = el! }} type='button' name='fullscreen' className={`fullscreen-btn ${isFullScreen ? 'fullscreen-btn--closed' : ''}`} onClick={toggleFullscreen}></button>)
}

export default FullScreenBtn
