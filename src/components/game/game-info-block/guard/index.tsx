import React from 'react'
import { useSelector } from 'react-redux'

import { InitialStateInterface } from '../../../../store/reducer'

const Guard: React.FC = function () {
  const guard = useSelector((state: InitialStateInterface) => state.guard)
  const { name, firstJoke, picture } = guard
  return (<div className="guard" >
      <div className="guard-message__wrapper" >
        <div className='guard-message--top'></div>
        <div className="guard-message">{firstJoke}</div>
        <div className='guard-message--bottom'></div>
      </div>
        <img
        className="guard__picture"
        src={picture}
        alt={name}
        />
        <p className='guard__name'>{name}</p>
    </div>
  )
}

export default Guard
