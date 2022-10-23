import { Actions } from './actions'
import { CHANGE_GAME_STATUS, SHOW_RULES, SHOW_START_MENU } from './action-types'

export const initialState: initialSateInterface = {
  gameStatus: false,
  gameRules: false,
  startMenu: false
}

export interface initialSateInterface {
  gameStatus: boolean
  gameRules: boolean
  startMenu: boolean
}

function reducer (state: initialSateInterface = initialState, action: Actions): initialSateInterface {
  switch (action.type) {
    case CHANGE_GAME_STATUS:
      return { ...state, gameStatus: action.payload }

    case SHOW_RULES:
      return { ...state, gameRules: action.payload }

    case SHOW_START_MENU:
      return { ...state, startMenu: action.payload }

    default: return state
  }
}

export default reducer
