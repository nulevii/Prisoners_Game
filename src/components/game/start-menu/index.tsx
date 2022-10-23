import React from 'react'

const StartMenu: React.FC = function () {
  return (
    <div>
      <p>Select Prisoners quantity</p>
      <button>+ 10</button>
      <button>+ 1</button>
      <p>0</p>
      <button>- 1</button>
      <button>- 10</button>
      <button>Start</button>
    </div>
  )
}

export default StartMenu
