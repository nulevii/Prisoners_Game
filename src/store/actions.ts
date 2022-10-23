import { CHANGE_GAME_STATUS, SHOW_RULES, SHOW_START_MENU, SHOW_SETTINGS, SHOW_GAME_SETTINGS } from './action-types'

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

export const showSettings = (payload: boolean): showSettingsInterface => ({
  type: SHOW_SETTINGS,
  payload
})
interface showSettingsInterface {
  type: typeof SHOW_SETTINGS
  payload: boolean
}

export const showGameSettings = (payload: boolean): showGameSettingsInterface => ({
  type: SHOW_GAME_SETTINGS,
  payload
})
interface showGameSettingsInterface {
  type: typeof SHOW_GAME_SETTINGS
  payload: boolean
}

export type Actions = ChangeGameStatusInterface | showRulesInterface | showStartMenuInterface | showSettingsInterface | showGameSettingsInterface
