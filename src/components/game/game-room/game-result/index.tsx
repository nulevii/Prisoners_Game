import React from 'react'
import { useAppSelector } from '../../../../store/hooks'
const GameResult: React.FC = function () {
  const gameStatus = useAppSelector((state) => state.gameLogic.gameStatus)
  if (gameStatus === 'win') {
    return (
    <div className='game-result'>
      You win
    </div>
    )
  }

  if (gameStatus === 'lose') {
    return (
    <div className='game-result'>
      You lose
    </div>
    )
  }

  if (gameStatus === 'paused') {
    return (
    <div className='game-result'>
      Game paused
    </div>
    )
  }

  return null
}

export default GameResult
