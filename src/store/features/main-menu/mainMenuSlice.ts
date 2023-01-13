import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IMainMenuState {
  isShownGameRoom: boolean
  isShownGameRules: boolean
  isShownAbout: boolean
}

const initialState: IMainMenuState = {
  isShownGameRoom: false,
  isShownGameRules: false,
  isShownAbout: false
}

const mainMenuSlice = createSlice({
  name: 'mainMenu',
  initialState,
  reducers: {
    openGame: (state, { payload }: PayloadAction<boolean>) => {
      state.isShownGameRoom = payload
    },
    showRules: (state, { payload }: PayloadAction<boolean>) => {
      state.isShownGameRules = payload
    },
    showAbout: (state, { payload }: PayloadAction<boolean>) => {
      state.isShownAbout = payload
    }

  }
})

export default mainMenuSlice.reducer
export const { openGame, showRules, showAbout } = mainMenuSlice.actions
