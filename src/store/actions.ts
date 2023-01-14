import {
  OPEN_GAME, SHOW_RULES, SHOW_ABOUT,
  SHOW_GAME_SETTINGS, CHANGE_PRISONERS_QTT, CHANGE_TIME_LIMIT,
  CHANGE_GAME_STATUS, START_GAME, STOP_GAME, SOUND_SWITCH, VOLUME_SWITCH, OPEN_BOX, SHOW_MAIN_MENU_CONFIRM_WINDOW, SHOW_RESET_CONFIRM_WINDOW
} from './action-types'

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
  | IChangePrisonersQtt
  | IChangeTimeLimit
  | IStartGame
  | IStopGame
  | ISoundSwitch
  | IVolumeSwitch
  | IChangeGameStatus
  | IOpenBox
