import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { InitialStateInterface } from '../../store/reducer'
import { changeGameStatus, showRules, showAbout } from '../../store/actions'

import Rules from '../rules'
import AboutSection from './about-section'

import sprite from './../../img/sprite.png'

const MainMenu: React.FC = () => {
  const dispatch = useDispatch()
  const gameRulseStatus: boolean = useSelector((state: InitialStateInterface) => state.gameRules)
  const settingsStatus: boolean = useSelector((state: InitialStateInterface) => state.about)

  const onStartGame = (): void => {
    dispatch(changeGameStatus(true))
  }

  const onInstruction = (): void => {
    dispatch(showRules(true))
  }

  const onAbout = (): void => {
    dispatch(showAbout(true))
  }
  return (
    <div className='menuContainer'>
      <div className='gameTitle'>
        <div className="TitleLetter TitleLetterP"><img src={sprite} alt="" width="150" /></div>
        <div className="TitleLetter TitleLetterI"></div>
        <div className="TitleLetter TitleLetterS"></div>
        <div className="TitleLetter TitleLetterO"></div>
        <div className="TitleLetter TitleLetterN"></div>
        <div className="TitleLetter TitleLetterE"></div>
        <div className="TitleLetter TitleLetterR"></div>
        <div className="TitleLetter TitleLetterS"></div>
      </div>
      <button onClick={onStartGame} >Start game</button>
      <button onClick={onInstruction}>Instruction</button>
      <button onClick={onAbout}>About</button>
      {gameRulseStatus ? <Rules /> : null}
      {settingsStatus ? <AboutSection /> : null}
    </div>
  )
}

export default MainMenu
