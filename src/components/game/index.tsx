import React from 'react'

import GameRoom from './game-room'
import GameInfoBlock from './game-info-block'

const Game: React.FC = () => {
  return (
    <section className='game'>
      <GameRoom />
      <GameInfoBlock />
    </section>
  )
}

export default Game
