import React, { useState } from 'react'
import { useAppDispatch } from '../../store/hooks'
import { setShowRules } from '../../store/features/main-menu/mainMenuSlice'
import { useAddShadowLight } from '../../utilities/textShadowLight'

const Rules: React.FC = function () {
  const dispatch = useAppDispatch()
  const onHideRules = (): void => {
    dispatch(setShowRules(false))
  }
  const textShadowRefs = useAddShadowLight()
  const [currentIdx, setCurrentIdx] = useState(0)
  const [zIndex, setZIndex] = useState([1, 2, 3, 4])
  const [disabledArrows, setDisabledArrows] = useState(false)

  const rulesText = [
    'In this game you are a prisoner, one among many. Your task is to escape. Guards want to play a game with you, in which you cannot win. At least, they think so.',
    'You and your cellmates must find all the Keys from the Main Gate in the boxes that Guards prepared for you in the Common Room. Every box has a number on it and a different number in it. There are as many boxes, as the prisoners.', // Both numbers equal to the quantity of prisoners.
    "The prisoners enter the room one by one and try to find the number inside the box that matches their Prisoner ID. The keys are inside those boxes. I suppose you remember your ID, as it's printed on your uniform. Numbers never change!",
    "Each player... sorry, each prisoner can only open half of the boxes in the room. If you don't find your number, better luck next time! Of course, there will be no next time. In fact, if at least one of your cellmates doesn't find their number, the game is over."
  ]

  function swapLeft (): void {
    if (!disabledArrows) {
      setDisabledArrows(true)
      setCurrentIdx((prevIdx) => prevIdx - 1)
      console.log(currentIdx)
      setTimeout(() => setZIndex(prev => prev.map(el => {
        if (el === 1) {
          setDisabledArrows(false)
          return 4
        }
        setDisabledArrows(false)
        return el - 1
      })
      ), 500)
    }
  }

  function swapRight (): void {
    if (!disabledArrows) {
      setDisabledArrows(true)
      setCurrentIdx((prevIdx) => prevIdx + 1)
      console.log(currentIdx)
      setTimeout(() => setZIndex(prev => prev.map(el => {
        if (el === 4) {
          setDisabledArrows(false)
          return 1
        }
        setDisabledArrows(false)
        return el + 1
      })
      ), 500)
    }
  }

  return (
    <div className="rulesDiv">
      <button
        className="closeBtn"
        onClick={onHideRules}
        ref={(el) => {
          textShadowRefs.current![2] = el!
        }}
      ></button>
      <p
        className={
          currentIdx === 4
            ? 'animatedText rulesText'
            : 'rulesText'
        }
        key={rulesText[3]}
        style={{ zIndex: zIndex[0] }}

      >
        {rulesText[3]}
      </p>
      <p
        className={
          currentIdx === 3
            ? 'animatedText rulesText'
            : 'rulesText'
        }
        key={rulesText[2]}
        style={{ zIndex: zIndex[1] }}

      >
        {rulesText[2]}
      </p>
      <p
        className={
          currentIdx === 2
            ? 'animatedText rulesText'
            : 'rulesText'
        }
        key={rulesText[1]}
        style={{ zIndex: zIndex[2] }}
      >
        {rulesText[1]}
      </p>
      <p
        className={
          currentIdx === 1
            ? 'animatedText rulesText'
            : 'rulesText'
        }
        style={{ zIndex: zIndex[3] }}
        key={rulesText[0]}
      >
        {rulesText[0]}
      </p>
      <button
        className={`rulesLeft rulesArrow ${currentIdx === 0 ? 'visually-hidden' : ''}`}
        onClick={swapLeft}
        ref={(el) => {
          textShadowRefs.current![0] = el!
        }}
      ></button>
      <button
        className={`rulesRight rulesArrow ${
          currentIdx === rulesText.length - 1 ? 'visually-hidden' : ''
        }`}
        onClick={swapRight}
        id="rulesArrowRight"
        ref={(el) => {
          textShadowRefs.current![1] = el!
        }}
      ></button>
    </div>
  )
}

export default Rules
