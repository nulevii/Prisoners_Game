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
      <img
        className="prisoner__img"
        src={PrisonersArray[prisonerIndex].prisonerImg}
        alt={PrisonersArray[prisonerIndex].prisonerName}
      />
      <p className="prisoner__name">{PrisonersArray[prisonerIndex].prisonerName}</p>
      {/* <p className="prisoner__index">{PrisonersArray[prisonerIndex].prisonerNumber}</p> */}
      {/* <p>Attempts {PrisonersArray[prisonerIndex].attempts}</p> */}
    </div>
  )
}

export default Prisoner
