import React from 'react'
import { useAddShadowLight } from '../../utilities/textShadowLight'

const ConfirmWindow: React.FC<{ onActionYes: () => void, onActionNo: () => void, action: string }> = function ({ onActionYes, onActionNo, action }) {
  const textShadowRefs = useAddShadowLight()
  return (
    <div className='modal-window'>
      <div className='confirm'>
      <p className='confirm__text'>Are you sure you want to {action}?</p>
      <button className='confirm__button yes-btn' onClick={onActionNo} ref={(el) => { textShadowRefs.current![0] = el! }}></button>
      <button className='confirm__button no-btn' onClick={onActionYes} ref={(el) => { textShadowRefs.current![1] = el! }}></button>
      </div>
    </div>
  )
}

export default ConfirmWindow
