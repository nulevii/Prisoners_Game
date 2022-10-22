import { Actions } from './actions'
import { CHANGE_GAME_STATUS, SHOW_RULES } from './action-types'

export const initialState: initialSateInterface = {
  gameStatus: false,
  gameRules: false
}

export interface initialSateInterface {
  gameStatus: boolean
  gameRules: boolean
}

function reducer (state: initialSateInterface = initialState, action: Actions): initialSateInterface {
  switch (action.type) {
    case CHANGE_GAME_STATUS:
      return { ...state, gameStatus: action.payload }

    case SHOW_RULES:
      return { ...state, gameRules: action.payload }

    default: return state
  }
}

export default reducer
