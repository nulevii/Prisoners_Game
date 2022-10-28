import React from 'react'
import { useSelector } from 'react-redux'
import { InitialStateInterface } from '../../../../store/reducer'
const GameResult: React.FC = function () {
  const gameStatus = useSelector((state: InitialStateInterface) => state.gameStatus)
  if (gameStatus === 'win') {
    return (
    <div>
      You win
    </div>
    )
  }

  if (gameStatus === 'lose') {
    return (
    <div>
      You lose
    </div>
    )
  }

  return null
}

export default GameResult
