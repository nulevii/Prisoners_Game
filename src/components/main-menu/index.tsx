import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { initialSateInterface } from '../../store/reducer'
import { changeGameStatus, showRules, showSettings } from '../../store/actions'

import Rules from '../rules'
import Settings from './settings'

const MainMenu: React.FC = () => {
  const dispatch = useDispatch()
  const gameRulseStatus: boolean = useSelector((state: initialSateInterface) => state.gameRules)
  const settingsStatus: boolean = useSelector((state: initialSateInterface) => state.settings)

  const onStartGame = (): void => {
    dispatch(changeGameStatus(true))
  }

  const onInstruction = (): void => {
    dispatch(showRules(true))
  }

  const onSettings = (): void => {
    dispatch(showSettings(true))
  }
  return (
    <div className='menuContainer'>
      <p className='gameTitle'>Prisoners</p>
      <button onClick={onStartGame}>Start game</button>
      <button onClick={onInstruction}>Instruction</button>
      <button onClick={onSettings}>Settings</button>
      {gameRulseStatus ? <Rules/> : null}
      {settingsStatus ? <Settings/> : null}
    </div>
  )
}

export default MainMenu
