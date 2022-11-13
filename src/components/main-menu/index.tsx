import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { InitialStateInterface } from '../../store/reducer'
import { changeGameStatus, showRules, showAbout } from '../../store/actions'

import Rules from '../rules'
import AboutSection from './about-section'
import { setCustomCursor } from '../../utilities/customCursor'
import { useAddShadow } from '../../utilities/textShadow'
import useMenuRain from '../../utilities/useRainMenu'

const MainMenu: React.FC = () => {
  const textShadowRefs = useAddShadow()
  const rainCanvasRefs = useMenuRain()
  useEffect(() => {
    document.removeEventListener('mousemove', setCustomCursor)
    document.removeEventListener('touchmove', setCustomCursor)
    document.addEventListener('mousemove', setCustomCursor)
    document.addEventListener('touchmove', setCustomCursor)
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
      <div className="rainContainer">
        <canvas ref={(el) => { rainCanvasRefs.current[0] = el }} />
        <canvas ref={(el) => { rainCanvasRefs.current[1] = el }} />
        <canvas ref={(el) => { rainCanvasRefs.current[2] = el }} />
      </div>

      <div className="gameTitle"/>

      <button
        onClick={onStartGame}
        ref={(el) => { textShadowRefs.current![0] = el! }}
        className="menuBtn startBtn"
      ></button>
      <button
        onClick={onInstruction}
        ref={(el) => { textShadowRefs.current![1] = el! }}
        className="menuBtn instructionsBtn"
      ></button>
      <button
        onClick={onAbout}
        ref={(el) => { textShadowRefs.current![2] = el! }}
        className="menuBtn aboutBtn"
      ></button>
      <button className="soundBtn"></button>
      {gameRulseStatus ? <Rules /> : null}
      {settingsStatus ? <AboutSection /> : null}
    </div>
  )
}

export default MainMenu
