import React from 'react'
import useMouseEffects from './utilities/customHooks/useMouseEffects'

import GameWrapper from './components/gameWrapper'
import VolumeSettings from './components/volume-settings'
import FullScreenBtn from './components/fullscreen-btn'

const App: React.FC = () => {
  useMouseEffects()
  return (
    <>
      <GameWrapper></GameWrapper>
      <VolumeSettings />
      <FullScreenBtn />
    </>
  )
}

export default App
