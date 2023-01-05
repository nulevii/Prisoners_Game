import React, { useEffect, useState } from 'react'

const FullScreenBtn: React.FC = () => {
  const [isFullScreen, setIsFullScreen] = useState(false)

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
    setIsFullScreen(!isFullScreen)
  }

  return (<button type='button' name='fullscreen' className={`fullscreen-btn ${isFullScreen ? 'fullscreen-btn--closed' : ''}`} onClick={toggleFullscreen}></button>)
}

export default FullScreenBtn
