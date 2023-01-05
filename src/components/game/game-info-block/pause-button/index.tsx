import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { InitialStateInterface } from '../../../../store/reducer'
import { changeGameStatus } from '../../../../store/actions'
import { useAddShadowLight } from '../../../../utilities/textShadowLight'

function PauseButton (): JSX.Element {
  const dispatch = useDispatch()
  const gameStatus = useSelector((state: InitialStateInterface) => state.gameStatus)
  const textShadowRefs = useAddShadowLight()

  const onPause = (): void => {
    if (gameStatus === 'paused') {
      dispatch(changeGameStatus('started'))
      return
    }
    dispatch(changeGameStatus('paused'))
  }
  return (
    <button onClick={onPause} className={`pause-button ${gameStatus === 'paused' ? 'paused' : ''}`} ref={(el) => { textShadowRefs.current![0] = el! }}></button>
  )
}

export default PauseButton
