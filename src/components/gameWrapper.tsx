import React from 'react'
import { useAppSelector } from '../store/hooks'

import MainMenu from './main-menu'
import Game from './game'

const GameWrapper: React.FC = function () {
  const { showGameRoom } = useAppSelector((state) => state.mainMenu)

  if (showGameRoom) { return (<Game />) }

  return (<MainMenu/>)
}

export default GameWrapper
