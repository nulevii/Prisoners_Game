import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  BoxInterface, GuardInterface, PrisonersInterface,
  createBoxesArray, createPrisoners, selectGuard
} from '../../../utilities/generateGameTools'

interface IGameLogicState {
  gameStatus: 'started' | 'notStarted' | 'win' | 'lose' | 'paused'
  boxes: BoxInterface[]
  prisoners: PrisonersInterface[]
  guard: GuardInterface
  currentPrisonerId: number
  isPrisonerIdShown: boolean
}
const initialState: IGameLogicState = {
  gameStatus: 'notStarted',
  boxes: [],
  prisoners: [],
  guard: selectGuard(),
  currentPrisonerId: 0,
  isPrisonerIdShown: false
}

const gameLocgicSlice = createSlice({
  name: 'gameLogic',
  initialState,
  reducers: {
    changeGameStatus: (state, { payload }: PayloadAction<IGameLogicState['gameStatus']>) => {
      state.gameStatus = payload
    },
    startGame: (state, { payload }: PayloadAction<number>) => {
      const boxes = createBoxesArray(payload)
      state.boxes = boxes
      state.prisoners = createPrisoners(boxes)
      state.currentPrisonerId = 0
      state.guard = selectGuard()
      state.gameStatus = 'started'
    },
    stopGame: (state) => {
      state.boxes = []
      state.prisoners = []
      state.gameStatus = 'notStarted'
      state.currentPrisonerId = 0
    },
    openBox: (state, { payload }: PayloadAction<number>) => {
      const openedBox = state.boxes.find(box => box.boxNumber === payload)
      const prisoner = state.prisoners[state.currentPrisonerId]

      if (openedBox !== undefined) {
        openedBox.isOpen = true
        prisoner.attempts -= 1
      }
      if (openedBox?.numberInBox === prisoner.prisonerNumber) {
        state.boxes = state.boxes.map(box => ({ ...box, isOpen: false }))
        state.currentPrisonerId += 1
        state.isPrisonerIdShown = true
      }
      if (state.prisoners[state.currentPrisonerId]?.attempts === 0) {
        state.gameStatus = 'lose'
      }
      if (state.currentPrisonerId === state.prisoners.length) {
        console.log('first')
        state.gameStatus = 'win'
      }
    },
    setIsPrisonerIdShown: (state, { payload }: PayloadAction<boolean>) => {
      state.isPrisonerIdShown = payload
    }
  }
}
)

export default gameLocgicSlice.reducer
export const { changeGameStatus, startGame, stopGame, openBox, setIsPrisonerIdShown } = gameLocgicSlice.actions
