import React from 'react'
import { Provider } from 'react-redux'

import { store } from './store/store'
import useMouseEffects from './utilities/customHooks/useMouseEffects'

import Game from './components/game'

const App: React.FC = () => {
  useMouseEffects()
  return (
    <Provider store={store}>
      <Game></Game>
    </Provider>
  )
}

export default App
