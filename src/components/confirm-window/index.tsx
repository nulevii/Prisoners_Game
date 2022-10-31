import React from 'react'

const ConfirmWindow: React.FC<{ onActionYes: () => void, onActionNo: () => void, action: string }> = function ({ onActionYes, onActionNo, action }) {
  console.log(onActionYes)
  return (
    <div>
      <p>Are you sure you want to {action}?</p>
      <button onClick={onActionYes}>Yes</button>
      <button onClick={onActionNo}>No</button>
    </div>
  )
}

export default ConfirmWindow
