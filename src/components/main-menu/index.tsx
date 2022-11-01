import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { InitialStateInterface } from '../../store/reducer'
import { changeGameStatus, showRules, showAbout } from '../../store/actions'

import Rules from '../rules'
import AboutSection from './about-section'
import { setCustomCursor } from '../../utilities/customCursor'

const MainMenu: React.FC = () => {
  useEffect(() => {
    document.addEventListener('mousemove', setCustomCursor)
    document.addEventListener('touchmove', setCustomCursor)

    const element = document.getElementById('element')
    if (element != null) {
      const { x, y, width, height } = element.getBoundingClientRect()
      console.log(width)

      document.addEventListener('mousemove', (info) => {
        const mouseX = info.clientX
        const mouseY = info.clientY
        const shadow = { x: x - mouseX + width / 2, y: y - mouseY + height / 2 }
        const xval = Math.abs(shadow.x)
        const yval = Math.abs(shadow.y)
        element.style.textShadow = `${shadow.x}px ${shadow.y}px ${Math.max(
              Math.max(xval, yval),
              1
            )}px black`
      })
    }
  }, [])

  const dispatch = useDispatch()
  const gameRulseStatus: boolean = useSelector(
    (state: InitialStateInterface) => state.gameRules
  )
  const settingsStatus: boolean = useSelector(
    (state: InitialStateInterface) => state.about
  )

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
    <div className="menuContainer">
      <div className="gameTitle">
        <div className="TitleLetter TitleLetterP"></div>
        <div className="TitleLetter TitleLetterR"></div>
        <div className="TitleLetter TitleLetterI"></div>
        <div className="TitleLetter TitleLetterS"></div>
        <div className="TitleLetter TitleLetterO"></div>
        <div className="TitleLetter TitleLetterN"></div>
        <div className="TitleLetter TitleLetterE"></div>
        <div className="TitleLetter TitleLetterRR"></div>
        <div className="TitleLetter TitleLetterSS"></div>
      </div>
      <h1 id="element" style={{ fontSize: '90px', color: 'white', display: 'inline-block' }}>Text</h1>

      <button onClick={onStartGame} className="menuBtn startBtn"></button>
      <button
        onClick={onInstruction}
        className="menuBtn instructionsBtn"
      ></button>
      <button onClick={onAbout} className="menuBtn aboutBtn"></button>
      <button className="soundBtn"></button>
      {gameRulseStatus ? <Rules /> : null}
      {settingsStatus ? <AboutSection /> : null}
    </div>
  )
}

export default MainMenu
