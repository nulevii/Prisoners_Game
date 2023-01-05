import React, { useState, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { showRules } from '../../store/actions'
import { useAddShadow } from '../../utilities/textShadow'

const Rules: React.FC = function () {
  const dispatch = useDispatch()
  const onHideRules = (): void => {
    dispatch(showRules(false))
  }
  const textShadowRefs = useAddShadow()
  const [idx, setCurrentIdx] = useState(0)

  const rulesText = [
    'In this game you are a prisoner, one among many. Your task is to escape. Guards want to play a game with you, in which you cannot win. At least, they think so.',
    'You and your cellmates must find all the Keys from the Main Gate in the boxes that Guards prepared for you in the Common Room. Every box has a number on it and a different number in it. There are as many boxes, as the prisoners.', // Both numbers equal to the quantity of prisoners.
    "The prisoners enter the room one by one and try to find the number inside the box that matches their Prisoner ID. The keys are inside those boxes. I suppose you remember your ID, as it's printed on your uniform. Numbers never change!",
    "Each player... sorry, each prisoner can only open half of the boxes in the room. If you don't find your number, better luck next time! Of course, there will be no next time. In fact, if at least one of your cellmates doesn't find their number, the game is over."
  ]

  function swapLeft (): void {
    setCurrentIdx(prevIdx => prevIdx - 1)
  }

  function swapRight (): void {
    setCurrentIdx(prevIdx => prevIdx + 1)
  }

  return (
    <div className="rulesDiv">
      <button className="closeBtn" onClick={onHideRules}></button>
      <p className="rulesText">{rulesText[idx]}</p>
      <button
        className={`rulesLeft rulesArrow ${idx === 0 ? 'visually-hidden' : ''}`}
        onClick={swapLeft}
      ></button>
      <button
        className={`rulesRight rulesArrow ${idx === rulesText.length - 1 ? 'visually-hidden' : ''}`}
        onClick={swapRight}
        id="rulesArrowRight"
      ></button>
    </div>
  )
}

export default Rules
