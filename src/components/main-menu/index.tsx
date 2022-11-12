import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { InitialStateInterface } from '../../store/reducer'
import { changeGameStatus, showRules, showAbout } from '../../store/actions'

import Rules from '../rules'
import AboutSection from './about-section'
import { setCustomCursor } from '../../utilities/customCursor'
import { addShadow } from '../../utilities/textShadow'
import useMenuRain from '../../utilities/menuRain'

const addShadowListener = (element: HTMLElement) => (event: MouseEvent) => addShadow(event, element)

const MainMenu: React.FC = () => {
  const textShadowRefs = useRef<HTMLButtonElement []>([])
  const rainCanvasRefs = useMenuRain()
  useEffect(() => {
    document.removeEventListener('mousemove', setCustomCursor)
    document.removeEventListener('touchmove', setCustomCursor)
    document.addEventListener('mousemove', setCustomCursor)
    document.addEventListener('touchmove', setCustomCursor)

    const fns = textShadowRefs.current.map((element) => {
      const fn = addShadowListener(element)
      document.addEventListener('mousemove', fn)
      return fn
    })

    return () => {
      textShadowRefs.current.forEach((_, index) => {
        document.removeEventListener('mousemove', fns[index])
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
      <div className="rainContainer">
        <canvas
          ref={(el) => {
            if (el !== null) {
              rainCanvasRefs.current[0] = el
            }
          }}
          id="rainCanvas1"
        ></canvas>
        <canvas
          ref={(el) => {
            if (el !== null) {
              rainCanvasRefs.current[1] = el
            }
          }}
          id="rainCanvas2"
        ></canvas>
        <canvas
          ref={(el) => {
            if (el !== null) {
              rainCanvasRefs.current[2] = el
            }
          }}
          id="rainCanvas3"
        ></canvas>
      </div>
      <div className="gameTitle">
      </div>
      <button
        onClick={onStartGame}
        ref={(el) => {
          if (el !== null) {
            textShadowRefs.current[0] = el
          }
        }}
        style={{ color: 'black' }}
        className="menuBtn startBtn"
      ></button>
      <button
        onClick={onInstruction}
        ref={(el) => {
          if (el !== null) {
            textShadowRefs.current[1] = el
          }
        }}
        className="menuBtn instructionsBtn"
        style={{ color: 'black' }}
      ></button>
      <button
        onClick={onAbout}
        ref={(el) => {
          if (el !== null) {
            textShadowRefs.current[2] = el
          }
        }}
        className="menuBtn aboutBtn"
        style={{ color: 'black' }}
      ></button>
      <button className="soundBtn"></button>
      {gameRulseStatus ? <Rules /> : null}
      {settingsStatus ? <AboutSection /> : null}
    </div>
  )
}

export default MainMenu
