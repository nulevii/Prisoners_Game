import { Actions } from './actions'
import { CHANGE_GAME_STATUS, SHOW_RULES, SHOW_START_MENU, SHOW_SETTINGS, SHOW_GAME_SETTINGS } from './action-types'

export const initialState: initialSateInterface = {
  gameStatus: false,
  gameRules: false,
  startMenu: false,
  settings: false,
  gameSettings: true
}

export interface initialSateInterface {
  gameStatus: boolean
  gameRules: boolean
  startMenu: boolean
  settings: boolean
  gameSettings: boolean
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

    default: return state
  }
}

export default reducer
