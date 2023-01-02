import React from 'react'

const ConfirmWindow: React.FC<{ onActionYes: () => void, onActionNo: () => void, action: string }> = function ({ onActionYes, onActionNo, action }) {
  console.log(onActionYes)
  return (
    <div className='confirm__wrapper'>
      <div className='confirm'>
      <p className='confirm__text'>Are you sure you want to {action}?</p>
      <button className='confirm__button' onClick={onActionYes}>Yes</button>
      <button className='confirm__button' onClick={onActionNo}>No</button>
      </div>
    </div>
  )
}

export default ConfirmWindow
