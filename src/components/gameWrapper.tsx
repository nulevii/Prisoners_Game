import React from 'react'
import { useSelector } from 'react-redux'
import { InitialStateInterface } from '../store/reducer'

import MainMenu from './main-menu'
import Game from './game'

const GameWrapper: React.FC = function () {
  const { gameRoom } = useSelector((state: InitialStateInterface) => state)

  if (gameRoom) { return (<Game />) }

  return (<MainMenu/>)
}

export default GameWrapper
