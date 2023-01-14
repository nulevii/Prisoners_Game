import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../store/hooks'
import { changeGameStatus } from '../../../../store/features/game-logic/gameLogicSlice'

function Clock (): JSX.Element {
  const dispatch = useAppDispatch()
  const { currentPrisonerId, gameStatus } = useAppSelector((state) => state.gameLogic)
  const timeLimit = useAppSelector((state) => state.gameSettings.timeLimit)
  const [timeLeft, setTimeLeft] = useState(timeLimit)
  useEffect(() => {
    const startTimer = (): void => {
      setTimeLeft((prevState: number) => prevState - 0.5)
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
