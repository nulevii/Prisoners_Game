import React from 'react'
import { useSelector } from 'react-redux'

import { InitialStateInterface } from '../../../store/reducer'

import Prisoner from './prisoner'
import Guard from './guard'
import PauseButton from './pause-button'
import Envelope from './envelope'
import Clock from './clock'

const GameInfoBlock: React.FC = function () {
  const gameStatus = useSelector((state: InitialStateInterface) => state.gameStatus)

  return (
    <section className='game-info-block'>
      {gameStatus === 'started' || gameStatus === 'paused'
        ? <>
          <Prisoner />
          <Envelope />
          <PauseButton />
          <Clock />
          <Guard />
        </>
        : <div className='not-started'>Game not started!</div>
      }
    </section>
  )
}

export default GameInfoBlock
