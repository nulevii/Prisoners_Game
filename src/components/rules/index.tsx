import React, { useState, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { showRules } from '../../store/actions'

const Rules: React.FC = function () {
  const dispatch = useDispatch()
  const onHideRules = (): void => {
    dispatch(showRules(false))
  }
  const rulesText = [
    'First you do one thing',
    'Then another thing',
    'And another thing',
    'At last, you win'
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
