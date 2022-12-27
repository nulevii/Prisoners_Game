import React, { useState, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { showRules } from '../../store/actions'

const Rules: React.FC = function () {
  const dispatch = useDispatch()
  const onHideRules = (): void => {
    dispatch(showRules(false))
  }
  const rulesText = [
    'In this game you are a prisoner, one among many. Your task is to escape. Guards want to play a game with you, in which you cannot win. At least, they think so.',
    'You and your cellmates must find all the Keys from the Main Gate in the boxes that Guards prepared for you in the Common Room. Every box has a number on it and a different number in it. There are as many boxes, as the prisoners.', // Both numbers equal to the quantity of prisoners.
    "The prisoners enter the room one by one and try to find the number inside the box that matches their Prisoner ID. The keys are inside those boxes. I suppose you remember your ID, as it's printed on your uniform. Numbers never change!",
    "Each player... sorry, each prisoner can only open half of the boxes in the room. If you don't find your number, better luck next time! Of course, there will be no next time. In fact, if at least one of your cellmates doesn't find their number, the game is over."
  ]

  const leftArrowRef = useRef<HTMLButtonElement>(null)
  const rightArrowRef = useRef<HTMLButtonElement>(null)
  const [idx, setCurrentIdx] = useState(0)

  function swapLeft (this: any): void {
    setCurrentIdx(idx - 1)
    if (idx === 1) {
      leftArrowRef.current?.classList.add('visually-hidden')
    }
    if (idx === rulesText.length - 1) {
      rightArrowRef.current?.classList.remove('visually-hidden')
    }
  }

  function swapRight (): void {
    setCurrentIdx(idx + 1)
    if (idx === 0) {
      leftArrowRef.current?.classList.remove('visually-hidden')
    }
    if (idx === rulesText.length - 2) {
      rightArrowRef.current?.classList.add('visually-hidden')
    }
  }

  return (
    <div className="rulesDiv">
      <button className="closeBtn" onClick={onHideRules}>

      </button>
      <p className="rulesText">{rulesText[idx]}</p>
      <button
        className="rulesLeft rulesArrow visually-hidden"
        onClick={swapLeft}
        ref={leftArrowRef}
      ></button>
      <button
        className="rulesRight rulesArrow"
        onClick={swapRight}
        id="rulesArrowRight"
        ref={rightArrowRef}
      ></button>
    </div>
  )
}

export default Rules
