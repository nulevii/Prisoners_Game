import { CHANGE_GAME_STATUS, SHOW_RULES, SHOW_START_MENU } from './action-types'

export const changeGameStatus = (payload: boolean): ChangeGameStatusInterface => ({
  type: CHANGE_GAME_STATUS,
  payload
})
interface ChangeGameStatusInterface {
  type: typeof CHANGE_GAME_STATUS
  payload: boolean
}

export const showRules = (payload: boolean): showRulesInterface => ({
  type: SHOW_RULES,
  payload
})
interface showRulesInterface {
  type: typeof SHOW_RULES
  payload: boolean
}

export const showStartMenu = (payload: boolean): showStartMenuInterface => ({
  type: SHOW_START_MENU,
  payload
})
interface showStartMenuInterface {
  type: typeof SHOW_START_MENU
  payload: boolean
}

export type Actions = ChangeGameStatusInterface | showRulesInterface | showStartMenuInterface
