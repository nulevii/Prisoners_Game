import React, { useState, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { showRules } from '../../store/actions'

const Rules: React.FC = function () {
  const dispatch = useDispatch()
  const onHideRules = (): void => {
    dispatch(showRules(false))
  }
  const rulesText = [
    'In this game you are the prisoner, one of them. Your tusk is to escape. Guards decide to play with you the game in wich you can not win, at least they think so.',
    'You with your cellmates should find all the keys from the Main Gates in the boxes that Guards prepared for you. Every box has a number on it and has a number inside it. Both numbers equal to quantyty of prisoners.',
    'You and your friends will enter in the room one by one and will try to find the nubmer inside the box, that equal to your Prisoner ID, key will be there, I supose you remember your ID, as it`s printed on your uniform. Numbers never change!',
    'You can only open half of the boxes in the room. If you won`t find your number, better luck next time (next time will never happend). In fact even at least one of your cellmates won`t find his number, the game will be finished.'
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
    <div className='rulesDiv'>
      <button className='closeBtn' onClick={onHideRules}>X</button>
      <p className='rulesText'>{rulesText[idx]}</p>
      <button className='rulesLeft rulesArrow visually-hidden' onClick={swapLeft} ref={leftArrowRef}></button>
      <button className='rulesRight rulesArrow' onClick={swapRight} id='rulesArrowRight' ref={rightArrowRef}></button>
    </div>
  )
}

export default Rules
