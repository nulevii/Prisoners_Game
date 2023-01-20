import React from 'react'
import { useAppSelector } from '../../../store/hooks'

import Prisoner from './prisoner'
import Guard from './guard'
import PauseButton from './pause-button'
import Envelope from './envelope'
import Timer from './timer'

const GameInfoBlock: React.FC = function () {
  const { gameStatus } = useAppSelector((state) => state.gameLogic)

  return (
    <section className='game-info-block'>
      {gameStatus === 'started' || gameStatus === 'paused'
        ? <>
          <Prisoner />
          <Envelope />
          <PauseButton />
          <Timer />
          <Guard />
        </>
        : <div className='not-started'>Game not started!</div>
      }
    </section>
  )
}

export default GameInfoBlock
