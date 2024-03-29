import React from 'react'
import { useAppSelector } from '../../../../store/hooks'

const Guard: React.FC = function () {
  const { name, firstJoke, picture } = useAppSelector((state) => state.gameLogic.guard)
  return (<div className="guard" >

    <img
      className="guard__picture"
      src={picture}
      alt={name}
    />
    <div className="guard-message__wrapper" >
      <div className='guard-message--top'></div>
      <div className="guard-message">{firstJoke}</div>
      <div className='guard-message--bottom'></div>
    </div>
    <p className='guard__name'>{name}</p>
  </div>
  )
}

export default Guard
