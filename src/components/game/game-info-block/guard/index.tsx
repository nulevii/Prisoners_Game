import React from 'react'
import { useSelector } from 'react-redux'

import { InitialStateInterface } from '../../../../store/reducer'

const Guard: React.FC = function () {
  const guard = useSelector((state: InitialStateInterface) => state.guard)
  const { name, firstJoke, picture } = guard
  console.log(guard)
  return (<div className="guard" style={{ display: 'flex' }} >
      <div className="guard__message" style={{ display: 'flex', padding: '40px' }} >
        {firstJoke}
      </div>
      <div className="guard__info">
        <p>{name}</p>
        <img
          src={picture}
          alt={name}
          style={{
            width: '100px'
          }}
        />
        <p>Prison Officer</p>
      </div>
    </div>
  )
}

export default Guard
