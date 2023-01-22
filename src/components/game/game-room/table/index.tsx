import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../../store/hooks'
import { openBox } from '../../../../store/features/game-logic/gameLogicSlice'

import { BOX_TABLE_POSITIONS } from '../../../../utilities/constants'

function Table ({ tableNumber, tableIndex }: { tableNumber: string, tableIndex: number }): JSX.Element {
  const dispatch = useAppDispatch()
  const { boxes, gameStatus } = useAppSelector((state) => state.gameLogic)

  const onOpenBox = (boxIndex: number): void => {
    if (gameStatus !== 'started') return
    dispatch(openBox(boxIndex))
  }
  return (<div className={`table table-${tableNumber}`}>
    {BOX_TABLE_POSITIONS.map(boxTablePosition => {
      const boxPosition = (tableIndex + 1) * 3 - boxTablePosition
      const boxIndex = boxes.findIndex(box => box.boxPosition === boxPosition)

      const invisibleBox = <div key={boxPosition} className='box' />
      if (boxIndex === -1) return invisibleBox

      const { boxNumber, numberInBox, isOpen } = boxes[boxIndex]

      const box = <div className={`box ${isOpen ? 'opened-box' : 'closed-box'}`} onClick={() => {
        onOpenBox(boxNumber)
      }} key={boxNumber}>
        {boxNumber}
        {isOpen && gameStatus === 'started' ? <p>{numberInBox}</p> : null}
      </div>
      return box
    })}
  </div>)
}

export default Table
