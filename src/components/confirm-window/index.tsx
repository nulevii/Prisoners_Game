import React from 'react'
import { useAddShadowLight } from '../../utilities/textShadowLight'

const ConfirmWindow: React.FC<{ onActionYes: () => void, onActionNo: () => void, action: string }> = function ({ onActionYes, onActionNo, action }) {
  console.log(onActionYes)
  const textShadowRefs = useAddShadowLight()
  return (
    <div className='confirm__wrapper'>
      <div className='confirm'>
      <p className='confirm__text'>Are you sure you want to {action}?</p>
      <button className='confirm__button' onClick={onActionYes} ref={(el) => { textShadowRefs.current![0] = el! }}>Yes</button>
      <button className='confirm__button' onClick={onActionNo} ref={(el) => { textShadowRefs.current![1] = el! }}>No</button>
      </div>
    </div>
  )
}

export default ConfirmWindow
