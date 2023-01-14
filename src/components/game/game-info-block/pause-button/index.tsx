import React from 'react'
import { useAppSelector, useAppDispatch } from '../../../../store/hooks'
import { changeGameStatus } from '../../../../store/features/game-logic/gameLocicSlice'
import { useAddShadowLight } from '../../../../utilities/textShadowLight'

function PauseButton (): JSX.Element {
  const dispatch = useAppDispatch()
  const gameStatus = useAppSelector((state) => state.gameLogic.gameStatus)
  const textShadowRefs = useAddShadowLight()

  const onPause = (): void => {
    console.log('first')
    if (gameStatus === 'paused') {
      dispatch(changeGameStatus('started'))
      return
    }
    dispatch(changeGameStatus('paused'))
  }
  return (
    <button onClick={onPause} className={`pause-button ${gameStatus === 'paused' ? '' : 'paused'}`} ref={(el) => { textShadowRefs.current![0] = el! }}></button>
  )
}

export default PauseButton
