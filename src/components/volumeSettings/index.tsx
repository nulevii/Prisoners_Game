import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ReactHowler from 'react-howler'

import mainMenuMusic from '../../assets/audio/main-menu-theme.mp3'
import { soundSwitch } from '../../store/actions'
import { InitialStateInterface } from '../../store/reducer'

const VolumeSettings: React.FC = () => {
  const dispatch = useDispatch()
  const { volume, sound } = useSelector((state: InitialStateInterface) => state)
  console.log(volume)
  const onSoundButton = (): void => {
    dispatch(soundSwitch(!sound))
  }
  return (
    <>
    <ReactHowler src={mainMenuMusic} html5={true} loop={true} playing={sound} volume={0.2}/>
    <button
      className={`soundBtn ${sound ? '' : 'soundOff'}`}
      onClick={() => {
        onSoundButton()
        console.log(sound)
      }}
    ></button>
      <input type='range' min='1' defaultValue='3' max='8' step='1' />
    </>
  )
}

export default VolumeSettings
