import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { InitialStateInterface } from '../../store/reducer'
import { changeGameStatus, showRules, showAbout } from '../../store/actions'

import Rules from '../rules'
import AboutSection from './about-section'
import { useAddShadow } from '../../utilities/textShadow'
import useRainMenu from '../../utilities/customHooks/useRainMenu'

const MainMenu: React.FC = () => {
  const textShadowRefs = useAddShadow()
  const rainCanvasRefs = useRainMenu()

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
      <div className='bgImg'></div>

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
      {gameRulseStatus ? <Rules /> : null}
      {settingsStatus ? <AboutSection /> : null}
    </div>
  )
}

export default MainMenu
