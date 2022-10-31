import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { InitialStateInterface } from '../../../store/reducer'
import { showGameSettings, increasePrisonersQtt, decreasePrisonersQtt, startGame } from '../../../store/actions'

const GameSettings: React.FC = function () {
  const dispatch = useDispatch()
  const prisonersQtt: number = useSelector((state: InitialStateInterface) => state.prisonersQtt)

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
      <button onClick={onBigIncrease}>+ {QTT_CHANGE}</button>
      <p>{prisonersQtt}</p>
      <button onClick={onBigDecrease}>- {QTT_CHANGE}</button>
      <button onClick={onStart}>Start</button>
    </div>
  )
}

export default GameSettings
