import React from 'react'
import { useAppDispatch } from '../../../../../store/hooks'
import { openBox } from '../../../../../store/features/game-logic/gameLogicSlice'
import { BoxInterface } from '../../../../../utilities/generateGameTools'

function Box ({ boxInfo: { boxNumber, isOpen, numberInBox, boxImg }, gameStatus }: { boxInfo: BoxInterface, gameStatus: string }): JSX.Element {
  const dispatch = useAppDispatch()
  const onOpenBox = (boxIndex: number): void => {
    if (gameStatus !== 'started') return
    dispatch(openBox(boxIndex))
  }
  return (
    <div className={`box ${isOpen ? 'opened-box' : 'closed-box'}`}
    onClick={() => { onOpenBox(boxNumber) }} style={{ backgroundImage: 'url(' + boxImg + ')' }}>
      {isOpen && gameStatus === 'started'
        ? <div className='inside-box-text'>{numberInBox}</div>
        : <div className='box-sticker'><div className='box-text-fieild'>{boxNumber}</div></div>}
    </div>)
}

export default Box
