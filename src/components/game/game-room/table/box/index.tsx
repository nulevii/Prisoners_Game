import React from 'react'
import { useAppDispatch } from '../../../../../store/hooks'
import { openBox } from '../../../../../store/features/game-logic/gameLogicSlice'
import { BoxInterface } from '../../../../../utilities/generateGameTools'

function Box ({ boxInfo: { boxNumber, isOpen, numberInBox }, gameStatus }: { boxInfo: BoxInterface, gameStatus: string }): JSX.Element {
  const dispatch = useAppDispatch()
  const onOpenBox = (boxIndex: number): void => {
    if (gameStatus !== 'started') return
    dispatch(openBox(boxIndex))
  }
  return (<div className={`box ${isOpen ? 'opened-box' : 'closed-box'}`} onClick={() => {
    onOpenBox(boxNumber)
  }}>
    {boxNumber}
    {isOpen && gameStatus === 'started' ? <p>{numberInBox}</p> : null}
  </div>)
}

export default Box
