import React from 'react'
import { useAppSelector } from '../../../../store/hooks'

const Prisoner: React.FC = function () {
  const PrisonersArray = useAppSelector((state) => state.gameLogic.prisoners)
  const prisonerIndex = useAppSelector((state) => state.gameLogic.currentPrisonerId)
  return (
    <div className="prisoner">
      <img
        className="prisoner__img"
        src={PrisonersArray[prisonerIndex]?.prisonerImg}
        alt={PrisonersArray[prisonerIndex]?.prisonerName}
      />
      <p className="prisoner__name">{PrisonersArray[prisonerIndex]?.prisonerName}</p>
      {/* <p className="prisoner__index">{PrisonersArray[prisonerIndex].prisonerNumber}</p> */}
      {/* <p>Attempts {PrisonersArray[prisonerIndex].attempts}</p> */}
    </div>
  )
}

export default Prisoner
