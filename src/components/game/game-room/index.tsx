import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { openBox } from '../../../store/features/game-logic/gameLogicSlice'

import GameResult from './game-result'
import GameButtons from './game-buttons'

const GameRoom: React.FC = function () {
  const dispatch = useAppDispatch()
  const { boxes, gameStatus } = useAppSelector((state) => state.gameLogic)

  const onOpenBox = (boxIndex: number): void => {
    if (gameStatus !== 'started') return
    dispatch(openBox(boxIndex))
  }
  return (
    <div className='game-field'>
      <div className='game-room-wrapper'>
        <GameButtons />
        <div className='boxes-wrapper'>
          {boxes.map(({ boxNumber, numberInBox, isOpen }, index) => (
            <div onClick={() => { onOpenBox(boxNumber) }} key={boxNumber}
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
