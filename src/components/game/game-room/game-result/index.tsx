import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../../store/hooks'
import { stopGame } from '../../../../store/features/game-logic/gameLogicSlice'
import { setShowGameSettings } from '../../../../store/features/game-settings/gameSettingsSlice'
import { setOpenGame } from '../../../../store/features/main-menu/mainMenuSlice'
import { useAddShadow } from '../../../../utilities/textShadow'

const GameResult: React.FC = function () {
  const dispatch = useAppDispatch()
  const textShadowRefs = useAddShadow()
  const gameStatus = useAppSelector((state) => state.gameLogic.gameStatus)

  function openMenu (): void {
    dispatch(stopGame())
    dispatch(setShowGameSettings(true))
    dispatch(setOpenGame(false))
  }

  if (gameStatus === 'win') {
    return (<div className="game-result">
      <button onClick={openMenu} ref={(el) => { textShadowRefs.current![2] = el! }} className='btn'>Main menu</button>
    </div>)
  }

  if (gameStatus === 'lose') {
    return (<div className="game-result lost">
      <button onClick={openMenu} ref={(el) => { textShadowRefs.current![2] = el! }} className='btn'>Main menu</button>
    </div>)
  }

  if (gameStatus === 'paused') {
    return (<div className="game-result pause"></div>)
  }

  return null
}

export default GameResult
