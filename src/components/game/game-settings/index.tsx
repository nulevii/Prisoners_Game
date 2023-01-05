import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { InitialStateInterface } from '../../../store/reducer'
import { showGameSettings, increasePrisonersQtt, decreasePrisonersQtt, startGame } from '../../../store/actions'
import { useAddShadow } from '../../../utilities/textShadow'

const GameSettings: React.FC = function () {
  const dispatch = useDispatch()
  const prisonersQtt: number = useSelector((state: InitialStateInterface) => state.prisonersQtt)
  const textShadowRefs = useAddShadow()

  const onStart = (): void => {
    dispatch(showGameSettings(false))
    dispatch(startGame())
  }
  const QTT_CHANGE = 10

  const onBigIncrease = (): void => {
    dispatch(increasePrisonersQtt(QTT_CHANGE))
  }

  const onBigDecrease = (): void => {
    dispatch(decreasePrisonersQtt(QTT_CHANGE))
  }

  return (
    <div>
      <p>Select Prisoners quantity</p>
      <button onClick={onBigIncrease} ref={(el) => { textShadowRefs.current![0] = el! }}>+ {QTT_CHANGE}</button>
      <p>{prisonersQtt}</p>
      <button onClick={onBigDecrease} ref={(el) => { textShadowRefs.current![1] = el! }}>- {QTT_CHANGE}</button>
      <button onClick={onStart} ref={(el) => { textShadowRefs.current![2] = el! }}>Start</button>
    </div>
  )
}

export default GameSettings
