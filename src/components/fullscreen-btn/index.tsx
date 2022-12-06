import React, { useState } from 'react'

const FullScreenBtn: React.FC = () => {
  const [currentBtn, setCurrentBtn] = useState('[ ]')
  document.addEventListener('fullscreenchange', checkFullscreen)

  function toggleFullscreen (): void {
    if (document.fullscreenElement != null) {
      void document.exitFullscreen()
    } else {
      void document.documentElement.requestFullscreen()
    }
  }
  function checkFullscreen (): void {
    currentBtn === '[ ]' ? setCurrentBtn('X') : setCurrentBtn('[ ]')
  }

  return (<button type='button' name='fullscreen' className='fullscreen-btn' onClick={toggleFullscreen}>{currentBtn}</button>)
}

export default FullScreenBtn
