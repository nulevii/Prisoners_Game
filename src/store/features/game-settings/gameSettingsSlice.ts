import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IGameSettingsStore {
  showGameSettings: boolean
  prisonersQtt: number
  timeLimit: number
  confirmWindowType: 'reset' | 'main-menu' | ''
}

const initialState: IGameSettingsStore = {
  showGameSettings: true,
  prisonersQtt: 10,
  timeLimit: 20,
  confirmWindowType: ''
}

const gameSettingsSlice = createSlice({
  name: 'gameSettings',
  initialState,
  reducers: {
    changePrisonersQtt: (state, { payload }: PayloadAction<number>) => {
      state.prisonersQtt += payload
    },
    changeTimeLimit: (state, { payload }: PayloadAction<number>) => {
      state.timeLimit += payload
    },
    setShowGameSettings: (state, { payload }: PayloadAction<boolean>) => {
      state.showGameSettings = payload
    },
    setConfirmWindowType: (state, { payload }:
    PayloadAction<IGameSettingsStore['confirmWindowType']>) => {
      state.confirmWindowType = payload
    }
  }
})

export default gameSettingsSlice.reducer
export const { changePrisonersQtt, changeTimeLimit, setShowGameSettings, setConfirmWindowType } = gameSettingsSlice.actions
