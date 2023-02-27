import React, { useEffect } from 'react'
import { setIsPrisonerIdShown } from '../../../../store/features/game-logic/gameLogicSlice'
import { useAppDispatch, useAppSelector } from '../../../../store/hooks'
import { useAddShadowLight } from '../../../../utilities/textShadowLight'

function Envelope (): JSX.Element {
  const dispatch = useAppDispatch()
  const currentPrisonerId = useAppSelector((state) => state.gameLogic.currentPrisonerId)
  const prisoners = useAppSelector((state) => state.gameLogic.prisoners)
  const { isPrisonerIdShown } = useAppSelector(state => state.gameLogic)
  const textShadowRefs = useAddShadowLight()

  useEffect(() => {
    const hidePrisonerId = setTimeout(() => {
      dispatch(setIsPrisonerIdShown(false))
    }, 2000)
    if (!isPrisonerIdShown) {
      clearInterval(hidePrisonerId)
    }
  }, [currentPrisonerId, isPrisonerIdShown])
  const prisonerNumber = prisoners[currentPrisonerId].prisonerNumber

  const closeEnvelope = (): void => {
    dispatch(setIsPrisonerIdShown(false))
  }
  const openEnvelope = (): void => {
    dispatch(setIsPrisonerIdShown(true))
  }

  return (
    <>
    <button className='envelope-btn' onClick={openEnvelope} ref={(el) => { textShadowRefs.current![0] = el! }}></button>

    <section className={`modal-window ${isPrisonerIdShown ? '' : 'visually-hidden'}`}>
      <div className='envelope'>
      <button className="closeBtn" onClick={closeEnvelope} ref={(el) => { textShadowRefs.current![2] = el! }}></button>
      <p className="envelope__page">{prisonerNumber}</p>
      </div>
    </section>
    </>
  )
}

export default Envelope
