import React from 'react'
import { useDispatch } from 'react-redux'
import { showRules } from '../../store/actions'
const Rules: React.FC = function () {
  const dispatch = useDispatch()
  const onHideRules = (): void => {
    dispatch(showRules(false))
  }
  return (
    <div>
      <p>Game Rules</p>
      <button onClick={onHideRules}>Hide rules</button>
    </div>
  )
}

export default Rules
