import { configureStore } from '@reduxjs/toolkit'

import gameLogicReducer from './features/game-logic/gameLocicSlice'
import gameMenuReducer from './features/game-menu/gameMenuSlice'
import mainMenuReducer from './features/main-menu/mainMenuSlice'
import soundsReducer from './features/sounds/soundsSlice'

export const store = configureStore({
  reducer: {
    gameLogic: gameLogicReducer,
    gameMenu: gameMenuReducer,
    mainMenu: mainMenuReducer,
    sounds: soundsReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
