import { createSlice } from '@reduxjs/toolkit'
import { selectGuard, BoxInterface, GuardInterface, PrisonersInterface } from '../../../utilities/generateGameTools'

interface IGameLogicState {
  gameStatus: 'started' | 'notStarted' | 'win' | 'lose' | 'paused'
  boxes: BoxInterface[]
  prisoners: PrisonersInterface[]
  guard: GuardInterface
  currentPrisonerId: number
}
const initialState: IGameLogicState = {
  gameStatus: 'notStarted',
  boxes: [],
  prisoners: [],
  guard: selectGuard(),
  currentPrisonerId: 0
}

const gameLocgicSlice = createSlice({
  name: 'gameLogic',
  initialState,
  reducers: {}
})

export default gameLocgicSlice.reducer
