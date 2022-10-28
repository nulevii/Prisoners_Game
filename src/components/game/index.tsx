import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { InitialStateInterface } from '../../store/reducer'
import { changeGameStatus, showRules, showGameSettings } from '../../store/actions'

import MainMenu from '../main-menu'
import GameSettings from './game-settings'
import GameRoom from './game-room'
import GameInfoBlock from './game-info-block'
import Rules from '../rules'

const Game: React.FC = function () {
  const dispatch = useDispatch()
  const gameStatus: boolean = useSelector((state: InitialStateInterface) => state.gameRoom)
  const gameRulseStatus: boolean = useSelector((state: InitialStateInterface) => state.gameRules)
  const gameSettingsStatus: boolean = useSelector((state: InitialStateInterface) => state.gameSettings)
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
      <GameInfoBlock/>
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
