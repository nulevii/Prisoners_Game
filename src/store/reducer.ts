import { Actions } from './actions'
import { CHANGE_GAME_STATUS, SHOW_RULES, SHOW_START_MENU, SHOW_SETTINGS, SHOW_GAME_SETTINGS, INCREASE_PRISONERS_QTT, DECREASE_PRISONERS_QTT, START_GAME, OPEN_BOX } from './action-types'
import { createBoxesArray, BoxInterface, createPrisoners, PrisonersInterface } from '../utilities/generateGameTools'
export const initialState: InitialStateInterface = {
  gameRoom: false,
  gameRules: false,
  startMenu: false,
  settings: false,
  gameSettings: true,
  gameStatus: 'notStarted',

  prisonersQtt: 10,
  boxes: createBoxesArray(10),
  prisoners: [],
  currentPrisonerId: 0
}

export interface InitialStateInterface {
  gameRoom: boolean
  gameRules: boolean
  startMenu: boolean
  settings: boolean
  gameSettings: boolean
  gameStatus: 'started' | 'notStarted' | 'win' | 'lose'

  prisonersQtt: number
  boxes: BoxInterface[]
  prisoners: PrisonersInterface[]
  currentPrisonerId: number

}

function reducer (state: InitialStateInterface = initialState, action: Actions): InitialStateInterface {
  switch (action.type) {
    case CHANGE_GAME_STATUS:
      return { ...state, gameRoom: action.payload }

    case SHOW_RULES:
      return { ...state, gameRules: action.payload }

    case SHOW_START_MENU:
      return { ...state, startMenu: action.payload }

    case SHOW_SETTINGS:
      return { ...state, settings: action.payload }

    case SHOW_GAME_SETTINGS:
      return { ...state, gameSettings: action.payload }

      // App logic

    case INCREASE_PRISONERS_QTT:
      if (state.prisonersQtt + action.payload > 100) {
        return { ...state, prisonersQtt: 100 }
      }
      return { ...state, prisonersQtt: state.prisonersQtt + action.payload }

    case DECREASE_PRISONERS_QTT:
      if (state.prisonersQtt - action.payload < 10) {
        return { ...state, prisonersQtt: 10 }
      }
      return { ...state, prisonersQtt: state.prisonersQtt - action.payload }

    case START_GAME:
      return { ...state, boxes: createBoxesArray(state.prisonersQtt), prisoners: createPrisoners(state.prisonersQtt), gameStatus: 'started', currentPrisonerId: 0 }

    case OPEN_BOX:
      const newBoxes = [...state.boxes]
      newBoxes[action.payload] = { ...newBoxes[action.payload], isOpen: true }
      const newPrisoners = [...state.prisoners]
      newPrisoners[state.currentPrisonerId] = { ...newPrisoners[state.currentPrisonerId], attempts: state.prisoners[state.currentPrisonerId].attempts - 1 }
      console.log(state.gameStatus)

      if (newPrisoners[state.currentPrisonerId].prisonerNumber === state.boxes[action.payload].numberInBox) {
        const closedBoxes = newBoxes.map(box => { return { ...box, isOpen: false } })
        if (newPrisoners[state.currentPrisonerId].prisonerNumber === state.prisonersQtt) {
          return { ...state, gameStatus: 'win' }
        }
        return {
          ...state, currentPrisonerId: state.currentPrisonerId + 1, boxes: closedBoxes
        }
      }

      if (newPrisoners[state.currentPrisonerId].attempts === 0) {
        return { ...state, gameStatus: 'lose' }
      }
      return {
        ...state,
        boxes: newBoxes,
        prisoners: newPrisoners
      }

    default: return state
  }
}

export default reducer
