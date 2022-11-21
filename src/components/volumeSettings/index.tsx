import React, { useRef, ChangeEventHandler } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ReactHowler from 'react-howler'

import mainMenuMusic from '../../assets/audio/main-menu-theme.mp3'
import gameBackgroundMusic from '../../assets/audio/game-background.mp3'
import { soundSwitch, volumeSwitch } from '../../store/actions'
import { InitialStateInterface } from '../../store/reducer'

const VolumeSettings: React.FC = () => {
  const dispatch = useDispatch()
  const volumeRef = useRef(null)
  const { volume, sound, gameRoom } = useSelector((state: InitialStateInterface) => state)

  const onSoundButton = (): void => {
    dispatch(soundSwitch(!sound))
  }
  const onVolumeRange: ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatch(volumeSwitch((e.target as HTMLInputElement).valueAsNumber * 0.125))
  }
  return (
    <>
    <ReactHowler src={gameRoom ? gameBackgroundMusic : mainMenuMusic} html5={true} loop={true} playing={sound} volume={volume}/>
    <button
      className={`soundBtn ${sound ? '' : 'soundOff'}`}
      onClick={onSoundButton}
    ></button>
      <input className='volume' ref={volumeRef} onChange= {onVolumeRange} type='range' min='1' defaultValue='3' max='8' step='1' />
    </>
  )
}

export default VolumeSettings
