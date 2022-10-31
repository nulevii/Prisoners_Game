import React from 'react'
import { useDispatch } from 'react-redux'
import { showAbout } from '../../../store/actions'

const AboutSection: React.FC = function () {
  const dispatch = useDispatch()

  const onHideSettings = (): void => {
    dispatch(showAbout(false))
  }
  return (
    <div>
        volume
        theme
        <button onClick={onHideSettings}>Hide settings</button>
    </div>

  )
}

export default AboutSection
