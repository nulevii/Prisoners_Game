import React from 'react'

import { TABLE_NUMBERS_ARR } from '../../../utilities/constants'

import GameResult from './game-result'
import GameButtons from './game-buttons'
import Table from './table'

const GameRoom: React.FC = function () {
  return (
    <div className='game-field'>
      <div className='game-room-wrapper'>
        <GameButtons />
        {TABLE_NUMBERS_ARR.map((tableNumber, index) =>
          <Table key={tableNumber} tableNumber={tableNumber} tableIndex={index}></Table>
        )}
        <GameResult />
      </div>
    </div>

  )
}

export default GameRoom
