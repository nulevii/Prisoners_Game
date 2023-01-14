// import { Actions } from './actions'
// import {
//   OPEN_GAME, SHOW_RULES,
//   SHOW_ABOUT, SHOW_GAME_SETTINGS,
//   SHOW_MAIN_MENU_CONFIRM_WINDOW, SHOW_RESET_CONFIRM_WINDOW,
//   CHANGE_PRISONERS_QTT, CHANGE_TIME_LIMIT,
//   CHANGE_GAME_STATUS,
//   START_GAME, STOP_GAME, SOUND_SWITCH, VOLUME_SWITCH, OPEN_BOX
// } from './action-types'
// import {
//   createBoxesArray, BoxInterface, createPrisoners,
//   PrisonersInterface, selectGuard, GuardInterface
// } from '../utilities/generateGameTools'
// export const initialState: InitialStateInterface = {

// }

// export interface InitialStateInterface {
//   gameRoom: boolean
//   gameRules: boolean
//   about: boolean
//   gameSettings: boolean
//   resetConfrirmWindow: boolean
//   mainMenuConfirmWindow: boolean
//   sound: boolean
//   volume: number

// }

// function reducer(state: InitialStateInterface = initialState, action: Actions): InitialStateInterface {
//   switch (action.type) {
//     case SHOW_GAME_SETTINGS:
//       return { ...state, gameSettings: action.payload }

//     case SHOW_MAIN_MENU_CONFIRM_WINDOW:
//       return { ...state, mainMenuConfirmWindow: action.payload }

//     case SHOW_RESET_CONFIRM_WINDOW:
//       return { ...state, resetConfrirmWindow: action.payload }

//     // App logic

//     case CHANGE_GAME_STATUS:
//       return { ...state, gameStatus: action.payload }

//     case CHANGE_PRISONERS_QTT:
//       if (state.prisonersQtt + action.payload > 60) {
//         return { ...state, prisonersQtt: 60 }
//       }
//       if (state.prisonersQtt + action.payload < 10) {
//         return { ...state, prisonersQtt: 10 }
//       }
//       return { ...state, prisonersQtt: state.prisonersQtt + action.payload }

//     case CHANGE_TIME_LIMIT:
//       if (state.timeLimit + action.payload > 60) {
//         return { ...state, timeLimit: 60 }
//       }
//       if (state.timeLimit + action.payload < 10) {
//         return { ...state, timeLimit: 10 }
//       }

//       return { ...state, timeLimit: state.timeLimit + action.payload }

//     case START_GAME:
//       return {
//         ...state,
//         boxes: createBoxesArray(state.prisonersQtt),
//         prisoners: createPrisoners(state.prisonersQtt),
//         gameStatus: 'started',
//         currentPrisonerId: 0,
//         guard: selectGuard()
//       }

//     case STOP_GAME:
//       return {
//         ...state,
//         boxes: [],
//         prisoners: [],
//         gameStatus: 'notStarted',
//         currentPrisonerId: 0
//       }

//     case OPEN_BOX:
//       const newBoxes = [...state.boxes]
//       newBoxes[action.payload] = { ...newBoxes[action.payload], isOpen: true }
//       const newPrisoners = [...state.prisoners]
//       newPrisoners[state.currentPrisonerId] = {
//         ...newPrisoners[state.currentPrisonerId],
//         attempts: state.prisoners[state.currentPrisonerId].attempts - 1
//       }

//       if (
//         newPrisoners[state.currentPrisonerId].prisonerNumber ===
//         state.boxes[action.payload].numberInBox
//       ) {
//         const closedBoxes = newBoxes.map((box) => {
//           return { ...box, isOpen: false }
//         })
//         if (
//           newPrisoners[state.currentPrisonerId].prisonerNumber ===
//           state.prisonersQtt
//         ) {
//           return { ...state, gameStatus: 'win' }
//         }
//         return {
//           ...state,
//           currentPrisonerId: state.currentPrisonerId + 1,
//           boxes: closedBoxes
//         }
//       }

//       if (newPrisoners[state.currentPrisonerId].attempts === 0) {
//         return { ...state, gameStatus: 'lose' }
//       }
//       return {
//         ...state,
//         boxes: newBoxes,
//         prisoners: newPrisoners
//       }

//     default:
//       return state
//   }
// }

// export default reducer
