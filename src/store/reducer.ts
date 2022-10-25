import { Actions } from './actions'
import { CHANGE_GAME_STATUS, SHOW_RULES, SHOW_START_MENU, SHOW_SETTINGS, SHOW_GAME_SETTINGS, INCREASE_PRISONERS_QTT, DECREASE_PRISONERS_QTT } from './action-types'

export const initialState: initialSateInterface = {
  gameStatus: false,
  gameRules: false,
  startMenu: false,
  settings: false,
  gameSettings: true,
  prisonersQtt: 10
}

export interface initialSateInterface {
  gameStatus: boolean
  gameRules: boolean
  startMenu: boolean
  settings: boolean
  gameSettings: boolean
  prisonersQtt: number
}

function reducer (state: initialSateInterface = initialState, action: Actions): initialSateInterface {
  switch (action.type) {
    case CHANGE_GAME_STATUS:
      return { ...state, gameStatus: action.payload }

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

    default: return state
  }
}

export default reducer
