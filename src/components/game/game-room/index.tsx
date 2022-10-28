import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { InitialStateInterface } from '../../../store/reducer'
import { openBox } from '../../../store/actions'

import GameResult from './game-result'

const GameRoom: React.FC = function () {
  const dispatch = useDispatch()
  const boxes = useSelector((state: InitialStateInterface) => state.boxes)
  const gameStatus = useSelector((state: InitialStateInterface) => state.gameStatus)

  const onOpenBox = (boxIndex: number): void => {
    if (gameStatus === 'notStarted') { return }
    dispatch(openBox(boxIndex))
  }
  return (
    <div style={{ margin: '20px', display: 'flex', flexWrap: 'wrap', gap: '5px' }} className='room'>
      {boxes.map(({ boxNumber, numberInBox, isOpen }, index) => (
        <div onClick={() => { onOpenBox(index) }} key={boxNumber}
        style={{
          height: '100px',
          width: '100px',
          color: 'white',
          textAlign: 'center',
          backgroundColor: isOpen ? 'blue' : 'red'
        }}>
          {boxNumber}
          {isOpen && gameStatus === 'started' ? <p> {numberInBox}</p> : null}
        </div>
      ))}
        <GameResult ></GameResult>
    </div>

  )
}

export default GameRoom
