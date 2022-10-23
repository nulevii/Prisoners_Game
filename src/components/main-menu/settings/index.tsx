import React from 'react'
import { useDispatch } from 'react-redux'
import { showSettings } from '../../../store/actions'

const Settings: React.FC = function () {
  const dispatch = useDispatch()

  const onHideSettings = (): void => {
    dispatch(showSettings(false))
  }
  return (
    <div>
        volume
        theme
        <button onClick={onHideSettings}>Hide settings</button>
    </div>

  )
}

export default Settings
