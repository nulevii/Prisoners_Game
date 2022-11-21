import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import GameSettings from './game-rules'
import GameRoom from './game-room'
import GameInfoBlock from './game-info-block'
import Rules from '../rules'
import ConfirmWindow from '../confirm-window'
import { InitialStateInterface } from '../../store/reducer'

import {
  changeGameStatus,
  showRules,
  showGameSettings,
  showMainMenuConfirmWindow,
  showResetConfirmWindow,
  stopGame
} from '../../store/actions'

const Game: React.FC = () => {
  const dispatch = useDispatch()

  const {
    gameRules,
    gameSettings,
    resetConfrirmWindow,
    mainMenuConfirmWindow
  } = useSelector((state: InitialStateInterface) => state)

  const onReset = (): void => {
    dispatch(showResetConfirmWindow(true))
  }
  const onResetYes = (): void => {
    dispatch(stopGame())
    dispatch(showGameSettings(true))
    dispatch(showResetConfirmWindow(false))
  }
  const onResetNo = (): void => {
    dispatch(showResetConfirmWindow(false))
  }

  const onInstruction = (): void => {
    dispatch(showRules(true))
  }

  const onMainMenu = (): void => {
    dispatch(showMainMenuConfirmWindow(true))
  }
  const onMainMenuYes = (): void => {
    dispatch(showMainMenuConfirmWindow(false))
    dispatch(stopGame())
    dispatch(changeGameStatus(false))
    dispatch(showGameSettings(true))
  }
  const onMainMenuNo = (): void => {
    dispatch(showMainMenuConfirmWindow(false))
  }
  return (
    <div>
      {gameSettings ? <GameSettings /> : null}
      <GameRoom />
      <GameInfoBlock />
      <button onClick={onReset}>Reset</button>
      {resetConfrirmWindow
        ? (
        <ConfirmWindow
          action={'restart game'}
          onActionYes={onResetYes}
          onActionNo={onResetNo}
        ></ConfirmWindow>
          )
        : null}
      <br />
      <button onClick={onInstruction}>Instruction</button>
      {gameRules ? <Rules /> : null}
      <br />
      <button onClick={onMainMenu}>Main menu</button>
      {mainMenuConfirmWindow
        ? (
        <ConfirmWindow
          action={'go back to main menu'}
          onActionYes={onMainMenuYes}
          onActionNo={onMainMenuNo}
        ></ConfirmWindow>
          )
        : null}
    </div>
  )
}

export default Game