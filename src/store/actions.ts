import {
  CHANGE_GAME_STATUS, SHOW_RULES, SHOW_START_MENU, SHOW_ABOUT,
  SHOW_GAME_SETTINGS, INCREASE_PRISONERS_QTT, DECREASE_PRISONERS_QTT,
  START_GAME, STOP_GAME, SOUND_SWITCH, OPEN_BOX, SHOW_MAIN_MENU_CONFIRM_WINDOW, SHOW_RESET_CONFIRM_WINDOW
} from './action-types'

export const changeGameStatus = (payload: boolean): ChangeGameStatusInterface => ({
  type: CHANGE_GAME_STATUS,
  payload
})
interface ChangeGameStatusInterface {
  type: typeof CHANGE_GAME_STATUS
  payload: boolean
}

export const showRules = (payload: boolean): ShowRulesInterface => ({
  type: SHOW_RULES,
  payload
})
interface ShowRulesInterface {
  type: typeof SHOW_RULES
  payload: boolean
}

export const showStartMenu = (payload: boolean): ShowStartMenuInterface => ({
  type: SHOW_START_MENU,
  payload
})
interface ShowStartMenuInterface {
  type: typeof SHOW_START_MENU
  payload: boolean
}

export const showAbout = (payload: boolean): ShowAboutInterface => ({
  type: SHOW_ABOUT,
  payload
})
interface ShowAboutInterface {
  type: typeof SHOW_ABOUT
  payload: boolean
}

export const showGameSettings = (payload: boolean): ShowGameSettingsInterface => ({
  type: SHOW_GAME_SETTINGS,
  payload
})
interface ShowGameSettingsInterface {
  type: typeof SHOW_GAME_SETTINGS
  payload: boolean
}

export const showMainMenuConfirmWindow = (payload: boolean): ShowMainMenuConfirmWindowInterface => ({
  type: SHOW_MAIN_MENU_CONFIRM_WINDOW,
  payload
})
interface ShowMainMenuConfirmWindowInterface {
  type: typeof SHOW_MAIN_MENU_CONFIRM_WINDOW
  payload: boolean
}

export const showResetConfirmWindow = (payload: boolean): ShowResetConfirmWindowInterface => ({
  type: SHOW_RESET_CONFIRM_WINDOW,
  payload
})
interface ShowResetConfirmWindowInterface {
  type: typeof SHOW_RESET_CONFIRM_WINDOW
  payload: boolean
}

export const soundSwitch = (
  payload: boolean
): SoundSwitchInterface => ({
  type: SOUND_SWITCH,
  payload
})
interface SoundSwitchInterface {
  type: typeof SOUND_SWITCH
  payload: boolean
}

// App logic

export const increasePrisonersQtt = (payload: number): IncreasePrisonersQttInterface => ({
  type: INCREASE_PRISONERS_QTT,
  payload
})
interface IncreasePrisonersQttInterface {
  type: typeof INCREASE_PRISONERS_QTT
  payload: number
}

export const decreasePrisonersQtt = (payload: number): DecreasePrisonersQttInterface => ({
  type: DECREASE_PRISONERS_QTT,
  payload
})
interface DecreasePrisonersQttInterface {
  type: typeof DECREASE_PRISONERS_QTT
  payload: number
}

export const startGame = (): StartGameInterface => ({
  type: START_GAME
})
interface StartGameInterface {
  type: typeof START_GAME
}

export const stopGame = (): StopGameInterface => ({
  type: STOP_GAME
})
interface StopGameInterface {
  type: typeof STOP_GAME
}

export const openBox = (payload: number): OpenBoxInterface => ({
  type: OPEN_BOX,
  payload
})
interface OpenBoxInterface {
  type: typeof OPEN_BOX
  payload: number
}

export type Actions =
  | ChangeGameStatusInterface
  | ShowRulesInterface
  | ShowStartMenuInterface
  | ShowAboutInterface
  | ShowGameSettingsInterface
  | ShowResetConfirmWindowInterface
  | ShowMainMenuConfirmWindowInterface
  | IncreasePrisonersQttInterface
  | DecreasePrisonersQttInterface
  | StartGameInterface
  | StopGameInterface
  | SoundSwitchInterface
  | OpenBoxInterface
