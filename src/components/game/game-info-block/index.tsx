import React from 'react'
import { useSelector } from 'react-redux'
import { InitialStateInterface } from '../../../store/reducer'

const GameInfoBlock: React.FC = function () {
  const PrisonersArray = useSelector((state: InitialStateInterface) => state.prisoners)
  const gameStatus = useSelector((state: InitialStateInterface) => state.gameStatus)
  const prisonerIndex = useSelector((state: InitialStateInterface) => state.currentPrisonerId)
  if (gameStatus === 'started') {
    return (
    <section style={{ backgroundColor: 'yellow', height: '150px', display: 'flex', justifyContent: 'space-between' }} className='game-info-block'>
      <div className='prisoner'>
        <p>{PrisonersArray[prisonerIndex].prisonerNumber}</p>
        <p>{PrisonersArray[prisonerIndex].prisonerName}</p>
        <img src={PrisonersArray[prisonerIndex].prisonerImg} alt="PrisonersArray[0].prisonerNumber" style={{ width: '100px' }}/>
        <p>Attempts {PrisonersArray[prisonerIndex].attempts}</p>
      </div>
      <div className='guard' style={{ display: 'flex' }}>
        <div className='guard__message' style={{ display: 'flex', padding: '40px' }}>Funny Joke</div>
        <div className='guard__info'>
      <p>Guard Name</p>
      <img src='https://dinopixel.com/preload/1021/Squid-game-guard-.png' alt="PrisonersArray[0].prisonerNumber" style={{ width: '100px' }}/>
      <p>Security Guard</p>
      </div>
      </div>
    </section>
    )
  }
  return (
    <div style={{ backgroundColor: 'yellow', height: '150px' }} className='game-info-block'>
      Game not started
    </div>
  )
}

export default GameInfoBlock
