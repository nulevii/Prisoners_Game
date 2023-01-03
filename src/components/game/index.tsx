import React from 'react'

import GameRoom from './game-room'
import GameInfoBlock from './game-info-block'
import GameButtons from './game-buttons'

const Game: React.FC = () => {
  return (
    <section className='game'>
      <GameButtons />
      <GameRoom />
      <GameInfoBlock />
    </section>
  )
}

export default Game
