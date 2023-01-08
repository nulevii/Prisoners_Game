import React from 'react'
import { useSelector } from 'react-redux'
import { InitialStateInterface } from '../../../../store/reducer'
const GameResult: React.FC = function () {
  const gameStatus = useSelector((state: InitialStateInterface) => state.gameStatus)
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
