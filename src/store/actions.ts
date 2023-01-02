import {
  OPEN_GAME, SHOW_RULES, SHOW_ABOUT,
  SHOW_GAME_SETTINGS, INCREASE_PRISONERS_QTT, DECREASE_PRISONERS_QTT,
  CHANGE_GAME_STATUS, START_GAME, STOP_GAME, SOUND_SWITCH, VOLUME_SWITCH, OPEN_BOX, SHOW_MAIN_MENU_CONFIRM_WINDOW, SHOW_RESET_CONFIRM_WINDOW
} from './action-types'

export const openGame = (payload: boolean): IOpenGame => ({
  type: OPEN_GAME,
  payload
})
interface IOpenGame {
  type: typeof OPEN_GAME
  payload: boolean
}

export const showRules = (payload: boolean): IShowRules => ({
  type: SHOW_RULES,
  payload
})
interface IShowRules {
  type: typeof SHOW_RULES
  payload: boolean
}

export const showAbout = (payload: boolean): IShowAbout => ({
  type: SHOW_ABOUT,
  payload
})
interface IShowAbout {
  type: typeof SHOW_ABOUT
  payload: boolean
}

export const showGameSettings = (payload: boolean): IShowGameSettings => ({
  type: SHOW_GAME_SETTINGS,
  payload
})
interface IShowGameSettings {
  type: typeof SHOW_GAME_SETTINGS
  payload: boolean
}

export const showMainMenuConfirmWindow = (payload: boolean): IShowMainMenuConfirmWindow => ({
  type: SHOW_MAIN_MENU_CONFIRM_WINDOW,
  payload
})
interface IShowMainMenuConfirmWindow {
  type: typeof SHOW_MAIN_MENU_CONFIRM_WINDOW
  payload: boolean
}

export const showResetConfirmWindow = (payload: boolean): IShowResetConfirmWindow => ({
  type: SHOW_RESET_CONFIRM_WINDOW,
  payload
})
interface IShowResetConfirmWindow {
  type: typeof SHOW_RESET_CONFIRM_WINDOW
  payload: boolean
}

export const soundSwitch = (
  payload: boolean
): ISoundSwitch => ({
  type: SOUND_SWITCH,
  payload
})
interface ISoundSwitch {
  type: typeof SOUND_SWITCH
  payload: boolean
}

export const volumeSwitch = (
  payload: number
): IVolumeSwitch => ({
  type: VOLUME_SWITCH,
  payload
})
interface IVolumeSwitch {
  type: typeof VOLUME_SWITCH
  payload: number
}

// App logic

export const changeGameStatus = (
  payload: 'started' | 'notStarted' | 'win' | 'lose' | 'paused'
): IChangeGameStatus => ({
  type: CHANGE_GAME_STATUS,
  payload
})
interface IChangeGameStatus {
  type: typeof CHANGE_GAME_STATUS
  payload: 'started' | 'notStarted' | 'win' | 'lose' | 'paused'
}

export const increasePrisonersQtt = (payload: number): IIncreasePrisonersQtt => ({
  type: INCREASE_PRISONERS_QTT,
  payload
})
interface IIncreasePrisonersQtt {
  type: typeof INCREASE_PRISONERS_QTT
  payload: number
}

export const decreasePrisonersQtt = (payload: number): IDecreasePrisonersQtt => ({
  type: DECREASE_PRISONERS_QTT,
  payload
})
interface IDecreasePrisonersQtt {
  type: typeof DECREASE_PRISONERS_QTT
  payload: number
}

export const startGame = (): IStartGame => ({
  type: START_GAME
})
interface IStartGame {
  type: typeof START_GAME
}

export const stopGame = (): IStopGame => ({
  type: STOP_GAME
})
interface IStopGame {
  type: typeof STOP_GAME
}

export const openBox = (payload: number): IOpenBox => ({
  type: OPEN_BOX,
  payload
})
interface IOpenBox {
  type: typeof OPEN_BOX
  payload: number
}

export type Actions =
  | IOpenGame
  | IShowRules
  | IShowAbout
  | IShowGameSettings
  | IShowResetConfirmWindow
  | IShowMainMenuConfirmWindow
  | IIncreasePrisonersQtt
  | IDecreasePrisonersQtt
  | IStartGame
  | IStopGame
  | ISoundSwitch
  | IVolumeSwitch
  | IChangeGameStatus
  | IOpenBox
