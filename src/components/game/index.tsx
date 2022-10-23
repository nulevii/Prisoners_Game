import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { initialSateInterface } from '../../store/reducer'
import { changeGameStatus, showRules } from '../../store/actions'

import MainMenu from '../main-menu'
import StartMenu from './start-menu'
import Rules from '../rules'

const Game: React.FC = function () {
  const dispatch = useDispatch()
  const gameStatus: boolean = useSelector((state: initialSateInterface) => state.gameStatus)
  const gameRulseStatus: boolean = useSelector((state: initialSateInterface) => state.gameRules)

  const onMainMenu = (): void => {
    dispatch(changeGameStatus(false))
  }
  const onInstruction = (): void => {
    dispatch(showRules(true))
  }

  if (gameStatus) {
    return (
      <div>
        <StartMenu></StartMenu>
      <div>Game Started</div>
      <button>Reset</button>
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
