import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { BoxInterface, GuardInterface, PrisonersInterface, createBoxesArray, createPrisoners, selectGuard } from '../../../utilities/generateGameTools'

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

//       return {
//         ...state,
//         boxes: createBoxesArray(state.prisonersQtt),
//         prisoners: createPrisoners(state.prisonersQtt),
//         gameStatus: 'started',
//         currentPrisonerId: 0,
//         guard: selectGuard()
//       }

//     case STOP_GAME:
//       return {
//         ...state,
//         boxes: [],
//         prisoners: [],
//         gameStatus: 'notStarted',
//         currentPrisonerId: 0
//       }

const gameLocgicSlice = createSlice({
  name: 'gameLogic',
  initialState,
  reducers: {
    changeGameStatus: (state, { payload }: PayloadAction<IGameLogicState['gameStatus']>) => {
      state.gameStatus = payload
    },
    startGame: (state, { payload }: PayloadAction<number>) => {
      state.boxes = createBoxesArray(payload)
      state.prisoners = createPrisoners(payload)
      state.currentPrisonerId = 0
      state.guard = selectGuard()
      state.gameStatus = 'started'
    }
  }
})

export default gameLocgicSlice.reducer
export const { changeGameStatus, startGame } = gameLocgicSlice.actions
