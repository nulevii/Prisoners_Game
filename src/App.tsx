import React from 'react'
import { Provider } from 'react-redux'

import { store } from './store/store'
import useMouseEffects from './utilities/customHooks/useMouseEffects'

import GameWrapper from './components/gameWrapper'
import VolumeSettings from './components/volumeSettings'

const App: React.FC = () => {
  useMouseEffects()
  return (
    <Provider store={store}>
      <GameWrapper></GameWrapper>
      <VolumeSettings/>
    </Provider>
  )
}

export default App
