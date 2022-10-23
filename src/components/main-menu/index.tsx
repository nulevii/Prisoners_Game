import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { initialSateInterface } from '../../store/reducer'
import { changeGameStatus, showRules } from '../../store/actions'

import Rules from '../rules'

const MainMenu: React.FC = () => {
  const dispatch = useDispatch()
  const gameRulseStatus: boolean = useSelector((state: initialSateInterface) => state.gameRules)

  const onStartGame = (): void => {
    dispatch(changeGameStatus(true))
  }

  const onInstruction = (): void => {
    dispatch(showRules(true))
  }
  return (
    <div>
      <p>Prisoners Game</p>
      <button onClick={onStartGame}>Start game</button>
      <button onClick={onInstruction}>Instruction</button>
      {gameRulseStatus ? <Rules/> : null}
    </div>
  )
}

export default MainMenu
