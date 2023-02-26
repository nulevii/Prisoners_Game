import React, { useRef } from 'react'
import { useAppSelector, useAppDispatch } from '../../../../store/hooks'
import { useAddShadow } from '../../../../utilities/textShadow'
import { setShowGameSettings, setConfirmWindowType }
  from '../../../../store/features/game-settings/gameSettingsSlice'
import { stopGame } from '../../../../store/features/game-logic/gameLogicSlice'
import { setShowRules, setOpenGame } from '../../../../store/features/main-menu/mainMenuSlice'

const GameResult: React.FC = function () {
  const dispatch = useAppDispatch()
  const gameStatus = useAppSelector((state) => state.gameLogic.gameStatus)

  const textShadowRefs = useAddShadow()

  const isWin = gameStatus === 'win'
  const isLose = gameStatus === 'lose'
  const isPaused = gameStatus === 'paused'

  const onRestart = (): void => {
    dispatch(stopGame())
    dispatch(setShowGameSettings(true))
    dispatch(setConfirmWindowType(''))
  }

  const onMainMenu = (): void => {
    dispatch(setConfirmWindowType(''))
    dispatch(stopGame())
    dispatch(setShowGameSettings(true))
    dispatch(setOpenGame(false))
  }

  if (isPaused) {
    return (
      <div className='paused-modal'>
        Game Paused
      </div>
    )
  }
  if (isWin || isLose) {
    return (
      <section className='modal-window'>
        <div className='game-result '>
          <div className={`image-wrapper ${isLose ? 'lose-section' : ''} ${isWin ? 'win-section' : ''}`}>
            <div className="buttons">
              <button onClick={onMainMenu} className="selection-btn main-menu-btn" ref={(el) => { textShadowRefs.current![0] = el! }} />
              <button onClick={onRestart} className="selection-btn restart-btn" ref={(el) => { textShadowRefs.current![1] = el! }} />
            </div>
          </div>
        </div>
      </section>
    )
  }
  return null
}

export default GameResult
