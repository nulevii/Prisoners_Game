import React from 'react'
import { useAppSelector } from '../../store/hooks'

import GameRoom from './game-room'
import GameInfoBlock from './game-info-block'
import Rules from '../rules'

const Game: React.FC = () => {
  const { showGameRules } = useAppSelector((state) => state.mainMenu)
  return (
    <section className='game'>
      <GameRoom />
      <GameInfoBlock />
      {showGameRules && <Rules />}
    </section>
  )
}

export default Game
