import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { initialSateInterface } from '../../store/reducer'
import { changeGameStatus, showRules } from '../../store/actions'

import Rules from './rules'

const Game: React.FC = function () {
  const dispatch = useDispatch()
  const gameStatus: boolean = useSelector((state: initialSateInterface) => state.gameStatus)
  const gameRulseStatus: boolean = useSelector((state: initialSateInterface) => state.gameRules)

  const onStartGame = (): void => {
    dispatch(changeGameStatus(true))
  }

  const onInstruction = (): void => {
    dispatch(showRules(true))
  }
  if (gameStatus) {
    return (
      <div>Game Started</div>
    )
  }

  return (
    <div>
      <p>Prisoners Game</p>
      <button onClick={onStartGame}>Start game</button>
      <button onClick={onInstruction}>Instruction</button>
      {gameRulseStatus ? <Rules/> : null}
    </div>
  )
}

export default Game
