import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { initialSateInterface } from '../../store/reducer'
import { changeGameStatus, showRules, showGameSettings } from '../../store/actions'

import MainMenu from '../main-menu'
import GameSettings from './game-settings'
import GameRoom from './game-room'
import Rules from '../rules'

const Game: React.FC = function () {
  const dispatch = useDispatch()
  const gameStatus: boolean = useSelector((state: initialSateInterface) => state.gameStatus)
  const gameRulseStatus: boolean = useSelector((state: initialSateInterface) => state.gameRules)
  const gameSettingsStatus: boolean = useSelector((state: initialSateInterface) => state.gameSettings)
  const onMainMenu = (): void => {
    dispatch(changeGameStatus(false))
  }
  const onInstruction = (): void => {
    dispatch(showRules(true))
  }

  const onStart = (): void => {
    dispatch(showGameSettings(true))
  }

  if (gameStatus) {
    return (
      <div>
      {gameSettingsStatus ? <GameSettings/> : null}
      <GameRoom/>
      <button onClick={onStart}>Reset</button>
      <button onClick={onInstruction}>Instruction</button>
      <button onClick={onMainMenu}>Main menu</button>
      {gameRulseStatus ? <Rules/> : null}
      </div>
    )
  }

  return (
    <MainMenu/>
  )
}

export default Game
