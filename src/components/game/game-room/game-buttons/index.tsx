import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { InitialStateInterface } from '../../../../store/reducer'
import {
  openGame,
  showRules,
  showGameSettings,
  showMainMenuConfirmWindow,
  showResetConfirmWindow,
  stopGame
} from '../../../../store/actions'

import Rules from '../../../rules'
import ConfirmWindow from '../../../confirm-window'
import GameSettings from '../../game-settings'
import { useAddShadow } from '../../../../utilities/textShadow'

function GameButtons (): JSX.Element {
  const dispatch = useDispatch()
  const textShadowRefs = useAddShadow()

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
    dispatch(openGame(false))
    dispatch(showGameSettings(true))
  }
  const onMainMenuNo = (): void => {
    dispatch(showMainMenuConfirmWindow(false))
  }
  return (<div className='game-buttons'>
    <button onClick={onReset} ref={(el) => { textShadowRefs.current![0] = el! }}>Reset</button>
    <button onClick={onInstruction} ref={(el) => { textShadowRefs.current![1] = el! }}>Instruction</button>
    <button onClick={onMainMenu} ref={(el) => { textShadowRefs.current![2] = el! }}>Main menu</button>
    {resetConfrirmWindow
      ? (
        <ConfirmWindow
          action={'restart game'}
          onActionYes={onResetYes}
          onActionNo={onResetNo}
        ></ConfirmWindow>
        )
      : null}
    {gameRules ? <Rules /> : null}
    {mainMenuConfirmWindow
      ? (
        <ConfirmWindow
          action={'go back to main menu'}
          onActionYes={onMainMenuYes}
          onActionNo={onMainMenuNo}
        ></ConfirmWindow>
        )
      : null}

    {gameSettings ? <GameSettings /> : null}
  </div>)
}

export default GameButtons
