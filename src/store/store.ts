import { configureStore } from '@reduxjs/toolkit'

import gameLogicReducer from './features/game-logic/gameLocicSlice'
import gameSettingsReducer from './features/game-settings/gameSettingsSlice'
import mainMenuReducer from './features/main-menu/mainMenuSlice'
import soundsReducer from './features/sounds/soundsSlice'

export const store = configureStore({
  reducer: {
    gameLogic: gameLogicReducer,
    gameSettings: gameSettingsReducer,
    mainMenu: mainMenuReducer,
    sounds: soundsReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
