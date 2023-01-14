import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { setShowGameSettings, changePrisonersQtt, changeTimeLimit } from '../../../store/features/game-settings/gameSettingsSlice'
import { changeGameStatus } from '../../../store/features/game-logic/gameLocicSlice'
import { useAddShadow } from '../../../utilities/textShadow'

const GameSettings: React.FC = function () {
  const dispatch = useAppDispatch()
  const { prisonersQtt, timeLimit } = useAppSelector((state) => state.gameSettings)
  const textShadowRefs = useAddShadow()

  const INCREASE_QTT = +10
  const DECREASE_QTT = -10

  const INCREASE_TIME_LIMIT = +5
  const DECREASE_TIME_LIMIT = -5

  const onIncreasePrisonersQtt = (): void => {
    if (prisonersQtt >= 60) return
    dispatch(changePrisonersQtt(INCREASE_QTT))
  }
  const onDecreasePrisonersQtt = (): void => {
    if (prisonersQtt <= 10) return
    dispatch(changePrisonersQtt(DECREASE_QTT))
  }

  const onIncreaseTimeLimit = (): void => {
    if (timeLimit >= 60) return
    dispatch(changeTimeLimit(INCREASE_TIME_LIMIT))
  }
  const onDecreaseTimeLimit = (): void => {
    if (timeLimit <= 10) return
    dispatch(changeTimeLimit(DECREASE_TIME_LIMIT))
  }

  const onStart = (): void => {
    dispatch(setShowGameSettings(false))
    dispatch(changeGameStatus('started'))
  }

  return (
    <section className='modal-window'>
      <div className='game-settings'>
        <div className='select-block'>
          <p className='select-block__title'>Select Prisoners quantity</p>
          <button onClick={onDecreasePrisonersQtt} ref={(el) => { textShadowRefs.current![1] = el! }}>- </button>
          <p className='select-block__value'>{prisonersQtt}</p>
          <button onClick={onIncreasePrisonersQtt} ref={(el) => { textShadowRefs.current![0] = el! }}>+ </button>
        </div>
        <div className='select-block'>
          <p className='select-block__title'>Select Time limit</p>
          <button onClick={onDecreaseTimeLimit} ref={(el) => { textShadowRefs.current![4] = el! }}>- </button>
          <p className='select-block__value'>{timeLimit}</p>
          <button onClick={onIncreaseTimeLimit} ref={(el) => { textShadowRefs.current![3] = el! }}>+ </button>
        </div>
          <button onClick={onStart} ref={(el) => { textShadowRefs.current![5] = el! }}>Start</button>
      </div>
    </section>
  )
}

export default GameSettings
