import React from 'react'
import { useSelector } from 'react-redux'
import { InitialStateInterface } from '../../../store/reducer'

const GameInfoBlock: React.FC = function () {
  const PrisonersArray = useSelector((state: InitialStateInterface) => state.prisoners)
  const prisonerIndex = 0

  if (PrisonersArray.length > 0) {
    return (
    <div style={{ backgroundColor: 'yellow', height: '150px' }} className='game-info-block'>
      <div className='prisoner'>
        <p>{PrisonersArray[prisonerIndex].prisonerNumber}</p>
        <p>{PrisonersArray[prisonerIndex].prisonerName}</p>
        <img src={PrisonersArray[prisonerIndex].prisonerImg} alt="PrisonersArray[0].prisonerNumber" style={{ width: '100px' }}/>
      </div>
    </div>
    )
  }
  return (
    <div style={{ backgroundColor: 'yellow', height: '150px' }} className='game-info-block'>
      Game not started
    </div>
  )
}

export default GameInfoBlock
