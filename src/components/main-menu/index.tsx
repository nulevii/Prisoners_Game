import React from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { openGame, showRules, showAbout } from '../../store/features/main-menu/mainMenuSlice'

import Rules from '../rules'
import AboutSection from './about-section'
import { useAddShadow } from '../../utilities/textShadow'
import useRainMenu from '../../utilities/customHooks/useRainMenu'

const MainMenu: React.FC = () => {
  const textShadowRefs = useAddShadow()
  const rainCanvasRefs = useRainMenu()

  const dispatch = useAppDispatch()
  const { isShownGameRules } = useAppSelector((store) => store.mainMenu)
  const { isShownAbout } = useAppSelector((state) => state.mainMenu
  )

  const onStartGame = (): void => {
    dispatch(openGame(true))
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

      <div className="gameTitle" />

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
      {isShownGameRules ? <Rules /> : null}
      {isShownAbout ? <AboutSection /> : null}
    </div>
  )
}

export default MainMenu
