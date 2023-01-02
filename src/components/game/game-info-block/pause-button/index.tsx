import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { InitialStateInterface } from '../../../../store/reducer'
import { changeGameStatus } from '../../../../store/actions'

function PauseButton (): JSX.Element {
  const dispatch = useDispatch()
  const gameStatus = useSelector((state: InitialStateInterface) => state.gameStatus)
  const onPause = (): void => {
    if (gameStatus === 'paused') {
      dispatch(changeGameStatus('started'))
      return
    }
    dispatch(changeGameStatus('paused'))
  }
  return (
    <button onClick={onPause} className={`pause-button ${gameStatus === 'paused' ? 'paused' : ''}`} ></button>
  )
}

export default PauseButton
