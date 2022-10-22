import React from 'react'
import './App.css'
import Game from './components/game'
import { store } from './store/store'

import { Provider } from 'react-redux'

const App: React.FC = () => {
  return (
    <Provider store={store}>
    <Game></Game>
    </Provider>
  )
}

export default App
