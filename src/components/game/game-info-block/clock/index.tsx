import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeGameStatus } from '../../../../store/actions'
import { InitialStateInterface } from '../../../../store/reducer'

function Clock (): JSX.Element {
  const dispatch = useDispatch()
  const { currentPrisonerId, gameStatus, timeLimit } = useSelector((state: InitialStateInterface) => state)
  const [timeLeft, setTimeLeft] = useState(timeLimit)
  useEffect(() => {
    const startTimer = (): void => {
      setTimeLeft((prevState) => prevState - 0.5)
    }
    const timer = setInterval(startTimer, 500)
    if (gameStatus === 'paused') {
      clearInterval(timer)
    }
    return () => {
      clearInterval(timer)
    }
  }, [gameStatus])
  useEffect(() => {
    setTimeLeft(timeLimit)
  }, [currentPrisonerId])
  if (timeLeft <= 0) {
    dispatch(changeGameStatus('lose'))
  }
  return (
    <div className='clock'>Left {Math.ceil(timeLeft)} seconds</div>
  )
}

export default Clock
