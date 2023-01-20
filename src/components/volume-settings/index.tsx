import React, { useRef, ChangeEventHandler } from 'react'
import { useAppSelector, useAppDispatch } from '../../store/hooks'
import ReactHowler from 'react-howler'

import mainMenuMusic from '../../assets/audio/main-menu-theme.mp3'
import gameBackgroundMusic from '../../assets/audio/game-background.mp3'
import { soundSwitch, volumeSwitch } from '../../store/features/sounds/soundsSlice'
import { useAddShadow } from '../../utilities/textShadow'

const VolumeSettings: React.FC = () => {
  const dispatch = useAppDispatch()
  const volumeRef = useRef(null)
  const textShadowRefs = useAddShadow()
  const { volume, sound } = useAppSelector((state) => state.sounds)
  const { showGameRoom } = useAppSelector((state) => state.mainMenu)

  const onSoundButton = (): void => {
    dispatch(soundSwitch(!sound))
  }
  const onVolumeRange: ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatch(volumeSwitch((e.target as HTMLInputElement).valueAsNumber * 0.125))
  }
  return (
    <>
      <ReactHowler src={showGameRoom ? gameBackgroundMusic : mainMenuMusic} html5={true} loop={true} playing={sound} volume={volume} />
      <button
        className={`soundBtn ${sound ? '' : 'soundOff'}`}
        onClick={onSoundButton}
        ref={(el) => { textShadowRefs.current![0] = el! }}
      ></button>
      <input className={`volume ${sound ? '' : 'visually-hidden'}`} ref={volumeRef} onChange={onVolumeRange} type='range' min='1' defaultValue='3' max='8' step='1' />
    </>
  )
}

export default VolumeSettings
