import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { initialSateInterface } from '../../../store/reducer'
import { showGameSettings, increasePrisonersQtt, decreasePrisonersQtt } from '../../../store/actions'

const GameSettings: React.FC = function () {
  const dispatch = useDispatch()
  const prisonersQtt: number = useSelector((state: initialSateInterface) => state.prisonersQtt)

  const onStart = (): void => {
    dispatch(showGameSettings(false))
  }
  const SMALL_QTT_CHANGE = 1
  const BIG_QTT_CHANGE = 10

  const onSmallIncrease = (): void => {
    dispatch(increasePrisonersQtt(SMALL_QTT_CHANGE))
  }
  const onBigIncrease = (): void => {
    dispatch(increasePrisonersQtt(BIG_QTT_CHANGE))
  }
  const onSmallDecrease = (): void => {
    dispatch(decreasePrisonersQtt(SMALL_QTT_CHANGE))
  }
  const onBigDecrease = (): void => {
    dispatch(decreasePrisonersQtt(BIG_QTT_CHANGE))
  }

  return (
    <div>
      <p>Select Prisoners quantity</p>
      <button onClick={onBigIncrease}>+ {BIG_QTT_CHANGE}</button>
      <button onClick={onSmallIncrease}>+ {SMALL_QTT_CHANGE}</button>
      <p>{prisonersQtt}</p>
      <button onClick={onSmallDecrease}>- {SMALL_QTT_CHANGE}</button>
      <button onClick={onBigDecrease}>- {BIG_QTT_CHANGE}</button>
      <button onClick={onStart}>Start</button>
    </div>
  )
}

export default GameSettings
