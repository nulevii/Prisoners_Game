import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { InitialStateInterface } from '../../../store/reducer'
import { showGameSettings, changePrisonersQtt, changeTimeLimit, startGame } from '../../../store/actions'
import { useAddShadow } from '../../../utilities/textShadow'

const GameSettings: React.FC = function () {
  const dispatch = useDispatch()
  const { prisonersQtt, timeLimit } = useSelector((state: InitialStateInterface) => state)
  const textShadowRefs = useAddShadow()

  const onStart = (): void => {
    dispatch(showGameSettings(false))
    dispatch(startGame())
  }
  const INCREASE_QTT = +10
  const DECREASE_QTT = -10

  const INCREASE_TIME_LIMIT = +5
  const DECREASE_TIME_LIMIT = -5
  const onIncreasePrisonersQtt = (): void => {
    dispatch(changePrisonersQtt(INCREASE_QTT))
  }
  const onDecreasePrisonersQtt = (): void => {
    dispatch(changePrisonersQtt(DECREASE_QTT))
  }

  const onIncreaseTimeLimit = (): void => {
    dispatch(changeTimeLimit(INCREASE_TIME_LIMIT))
  }
  const onDecreaseTimeLimit = (): void => {
    dispatch(changeTimeLimit(DECREASE_TIME_LIMIT))
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
