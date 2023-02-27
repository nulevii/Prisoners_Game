import React from 'react'

import { TABLE_NUMBERS_ARR } from '../../../utilities/constants'

import GameResult from './game-result'
import GameButtons from './game-buttons'
import Table from './table'
import GameStats from './game-stats/indes'

const GameRoom: React.FC = function () {
  return (
    <div className='game-field'>
      <div className='game-room-wrapper'>
        <GameButtons />
        <GameStats />
        {TABLE_NUMBERS_ARR.map((tableNumber, index) =>
          <Table key={tableNumber} tableNumber={tableNumber} tableIndex={index}></Table>
        )}
        <GameResult />
      </div>
    </div>

  )
}

export default GameRoom
