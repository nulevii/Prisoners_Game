import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ISoundsState {
  sound: boolean
  volume: number
}
const initialState: ISoundsState = {
  sound: false,
  volume: 0.375
}

const soundsSlice = createSlice({
  name: 'sounds',
  initialState,
  reducers: {
    soundSwitch: (state, { payload }: PayloadAction<boolean>) => {
      state.sound = payload
    },
    volumeSwitch: (state, { payload }: PayloadAction<number>) => {
      state.volume = payload
    }
  }
})

export default soundsSlice.reducer
export const { soundSwitch, volumeSwitch } = soundsSlice.actions
