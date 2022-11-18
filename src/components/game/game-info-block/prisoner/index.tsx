import React from 'react'
import { useSelector } from 'react-redux'

import { InitialStateInterface } from '../../../../store/reducer'

const Prisoner: React.FC = function () {
  const PrisonersArray = useSelector(
    (state: InitialStateInterface) => state.prisoners
  )
  const prisonerIndex = useSelector(
    (state: InitialStateInterface) => state.currentPrisonerId
  )
  return (
    <div className="prisoner">
      <p>{PrisonersArray[prisonerIndex].prisonerNumber}</p>
      <p>{PrisonersArray[prisonerIndex].prisonerName}</p>
      <img
        src={PrisonersArray[prisonerIndex].prisonerImg}
        alt={PrisonersArray[prisonerIndex].prisonerName}
        style={{
          width: '100px'
        }}
      />
      <p>Attempts {PrisonersArray[prisonerIndex].attempts}</p>
    </div>
  )
}

export default Prisoner
