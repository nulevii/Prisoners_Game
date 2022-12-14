import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { InitialStateInterface } from '../../../store/reducer'
import { openBox } from '../../../store/actions'

import GameResult from './game-result'
import GameButtons from './game-buttons'

const GameRoom: React.FC = function () {
  const dispatch = useDispatch()
  const boxes = useSelector((state: InitialStateInterface) => state.boxes)
  const gameStatus = useSelector((state: InitialStateInterface) => state.gameStatus)

  const onOpenBox = (boxIndex: number): void => {
    if (gameStatus !== 'started') { return }
    dispatch(openBox(boxIndex))
  }
  return (
    <div className='game-field'>
      <div className='game-room-wrapper'>
        <GameButtons />
        <div className='boxes-wrapper'>
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
        </div>
        <GameResult />
      </div>
    </div>

  )
}

export default GameRoom
