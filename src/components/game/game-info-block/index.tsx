import React from 'react'
import { useSelector } from 'react-redux'

import { InitialStateInterface } from '../../../store/reducer'

import Prisoner from './prisoner'
import Guard from './guard'

const GameInfoBlock: React.FC = function () {
  const gameStatus = useSelector((state: InitialStateInterface) => state.gameStatus)

  if (gameStatus === 'started') {
    return (
    <section style={{ backgroundColor: 'yellow', height: '150px', display: 'flex', justifyContent: 'space-between' }} className='game-info-block'>
      <Prisoner />
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
