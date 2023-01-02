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

  if (gameStatus === 'started' || gameStatus === 'paused') {
    return (
    <section className='game-info-block'>
      <Prisoner />
      <Envelope />
      <PauseButton />
      <Clock />
      <Guard />
    </section>
    )
  }

  return (
    <div style={{ backgroundColor: 'yellow', height: '150px' }} className='game-info-block'>
      Game not started
    </div>
  )
}

export default GameInfoBlock
