import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../../store/hooks'

import { setShowGameSettings, setConfirmWindowType }
  from '../../../../store/features/game-settings/gameSettingsSlice'
import { stopGame } from '../../../../store/features/game-logic/gameLogicSlice'
import { setShowRules, setOpenGame } from '../../../../store/features/main-menu/mainMenuSlice'

import ConfirmWindow from '../../../confirm-window'
import GameSettings from '../../game-settings'
import { useAddShadow } from '../../../../utilities/textShadow'

function GameButtons (): JSX.Element {
  const dispatch = useAppDispatch()
  const textShadowRefs = useAddShadow()

  const { showGameSettings, confirmWindowType } =
  useAppSelector((state) => state.gameSettings)

  const isResetConfirmWindow = confirmWindowType === 'reset'
  const isManiMenuConfirmWindow = confirmWindowType === 'main-menu'

  const onReset = (): void => {
    dispatch(setConfirmWindowType('reset'))
  }
  const onResetYes = (): void => {
    dispatch(stopGame())
    dispatch(setShowGameSettings(true))
    dispatch(setConfirmWindowType(''))
  }
  const onResetNo = (): void => {
    dispatch(setConfirmWindowType(''))
  }
  const onInstruction = (): void => {
    dispatch(setShowRules(true))
  }

  const onMainMenu = (): void => {
    dispatch(setConfirmWindowType('main-menu'))
  }
  const onMainMenuYes = (): void => {
    dispatch(setConfirmWindowType(''))
    dispatch(stopGame())
    dispatch(setShowGameSettings(true))
    dispatch(setOpenGame(false))
  }
  const onMainMenuNo = (): void => {
    dispatch(setConfirmWindowType(''))
  }
  return (<div className='game-buttons'>
    <button onClick={onReset} ref={(el) => { textShadowRefs.current![0] = el! }}>Reset</button>
    <button onClick={onInstruction} ref={(el) => { textShadowRefs.current![1] = el! }}>Instruction</button>
    <button onClick={onMainMenu} ref={(el) => { textShadowRefs.current![2] = el! }}>Main menu</button>
    {isResetConfirmWindow &&
       (
        <ConfirmWindow
          action={'restart game'}
          onActionYes={onResetYes}
          onActionNo={onResetNo}
        ></ConfirmWindow>
       )}
    {isManiMenuConfirmWindow &&
       (
        <ConfirmWindow
          action={'go back to main menu'}
          onActionYes={onMainMenuYes}
          onActionNo={onMainMenuNo}
        ></ConfirmWindow>
       )}
    {showGameSettings ? <GameSettings /> : null}
  </div>)
}

export default GameButtons
