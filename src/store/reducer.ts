import { Actions } from './actions'
import {
  OPEN_GAME, SHOW_RULES,
  SHOW_ABOUT, SHOW_GAME_SETTINGS,
  SHOW_MAIN_MENU_CONFIRM_WINDOW, SHOW_RESET_CONFIRM_WINDOW,
  INCREASE_PRISONERS_QTT, DECREASE_PRISONERS_QTT,
  CHANGE_GAME_STATUS,
  START_GAME, STOP_GAME, SOUND_SWITCH, VOLUME_SWITCH, OPEN_BOX
} from './action-types'
import {
  createBoxesArray, BoxInterface, createPrisoners,
  PrisonersInterface, selectGuard, GuardInterface
} from '../utilities/generateGameTools'
export const initialState: InitialStateInterface = {
  gameRoom: false,
  gameRules: false,
  about: false,
  gameSettings: true,
  resetConfrirmWindow: false,
  mainMenuConfirmWindow: false,
  gameStatus: 'notStarted',
  sound: false,
  volume: 0.375,
  prisonersQtt: 10,
  boxes: [],
  prisoners: [],
  guard: selectGuard(),
  currentPrisonerId: 0
}

export interface InitialStateInterface {
  gameRoom: boolean
  gameRules: boolean
  about: boolean
  gameSettings: boolean
  resetConfrirmWindow: boolean
  mainMenuConfirmWindow: boolean
  gameStatus: 'started' | 'notStarted' | 'win' | 'lose' | 'paused'
  sound: boolean
  volume: number

  prisonersQtt: number
  boxes: BoxInterface[]
  prisoners: PrisonersInterface[]
  guard: GuardInterface
  currentPrisonerId: number

}

function reducer (state: InitialStateInterface = initialState, action: Actions): InitialStateInterface {
  switch (action.type) {
    case OPEN_GAME:
      return { ...state, gameRoom: action.payload }

    case SHOW_RULES:
      return { ...state, gameRules: action.payload }

    case SHOW_ABOUT:
      return { ...state, about: action.payload }

    case SHOW_GAME_SETTINGS:
      return { ...state, gameSettings: action.payload }

    case SHOW_MAIN_MENU_CONFIRM_WINDOW:
      return { ...state, mainMenuConfirmWindow: action.payload }

    case SHOW_RESET_CONFIRM_WINDOW:
      return { ...state, resetConfrirmWindow: action.payload }

    case SOUND_SWITCH:
      return { ...state, sound: action.payload }

    case VOLUME_SWITCH:
      return { ...state, volume: action.payload }

      // App logic

    case CHANGE_GAME_STATUS:
      return { ...state, gameStatus: action.payload }

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
      return {
        ...state,
        boxes: createBoxesArray(state.prisonersQtt),
        prisoners: createPrisoners(state.prisonersQtt),
        gameStatus: 'started',
        currentPrisonerId: 0,
        guard: selectGuard()
      }

    case STOP_GAME:
      return {
        ...state,
        boxes: [],
        prisoners: [],
        gameStatus: 'notStarted',
        currentPrisonerId: 0
      }

    case OPEN_BOX:
      const newBoxes = [...state.boxes]
      newBoxes[action.payload] = { ...newBoxes[action.payload], isOpen: true }
      const newPrisoners = [...state.prisoners]
      newPrisoners[state.currentPrisonerId] = {
        ...newPrisoners[state.currentPrisonerId],
        attempts: state.prisoners[state.currentPrisonerId].attempts - 1
      }
      console.log(state.gameStatus)

      if (
        newPrisoners[state.currentPrisonerId].prisonerNumber ===
        state.boxes[action.payload].numberInBox
      ) {
        const closedBoxes = newBoxes.map((box) => {
          return { ...box, isOpen: false }
        })
        if (
          newPrisoners[state.currentPrisonerId].prisonerNumber ===
          state.prisonersQtt
        ) {
          return { ...state, gameStatus: 'win' }
        }
        return {
          ...state,
          currentPrisonerId: state.currentPrisonerId + 1,
          boxes: closedBoxes
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

    default:
      return state
  }
}

export default reducer
