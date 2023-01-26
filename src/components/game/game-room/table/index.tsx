import React from 'react'
import { useAppSelector } from '../../../../store/hooks'
import { BOX_TABLE_POSITIONS } from '../../../../utilities/constants'

import Box from './box'
import BoxPlaceholder from './boxPlaceholder'

function Table ({ tableNumber, tableIndex }: { tableNumber: string, tableIndex: number }): JSX.Element {
  const { boxes, gameStatus } = useAppSelector((state) => state.gameLogic)

  return (
    <article className={`table table-${tableNumber}`}>
      {BOX_TABLE_POSITIONS.map(boxTablePosition => {
        const boxPosition = (tableIndex + 1) * 3 - boxTablePosition
        const box = boxes.find(box => box.boxPosition === boxPosition)

        if (box === undefined) return <BoxPlaceholder key={boxPosition} />
        return <Box key={box.boxNumber} boxInfo={box} gameStatus={gameStatus} />
      })}
    </article>)
}

export default Table
