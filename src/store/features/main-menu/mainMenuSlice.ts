import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IMainMenuState {
  showGameRoom: boolean
  showGameRules: boolean
  showAbout: boolean
}

const initialState: IMainMenuState = {
  showGameRoom: false,
  showGameRules: false,
  showAbout: false
}

const mainMenuSlice = createSlice({
  name: 'mainMenu',
  initialState,
  reducers: {
    setOpenGame: (state, { payload }: PayloadAction<boolean>) => {
      state.showGameRoom = payload
    },
    setShowRules: (state, { payload }: PayloadAction<boolean>) => {
      state.showGameRules = payload
    },
    setShowAbout: (state, { payload }: PayloadAction<boolean>) => {
      state.showAbout = payload
    }

  }
})

export default mainMenuSlice.reducer
export const { setOpenGame, setShowRules, setShowAbout } = mainMenuSlice.actions
