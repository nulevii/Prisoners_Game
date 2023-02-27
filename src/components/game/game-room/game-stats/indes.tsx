import React from 'react'
import { useAppSelector } from '../../../../store/hooks'

function GameStats (): JSX.Element {
  const { prisoners, currentPrisonerId, gameStatus } = useAppSelector(state => state.gameLogic)
  if (gameStatus !== 'started' && gameStatus !== 'paused') return <></>
  const attempts = prisoners[currentPrisonerId].attempts
  const gotKeys = currentPrisonerId + 1
  const totalKeys = prisoners.length
  const totalAttempts = prisoners.length / 2
  return (
    <article className='game-stats'>

      <div className='stat-wrapper'>
        {gotKeys}/{totalKeys}
        <div className="game-stats__keys"></div>
      </div>
      <div className='stat-wrapper'>
        {attempts}/{totalAttempts}
        <div className="game-stats__lifes"></div>
      </div>

    </article>
  )
}

export default GameStats
