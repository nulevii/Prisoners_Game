import React, { useState } from 'react'
import { useAppSelector } from '../../../../store/hooks'
import { useAddShadowLight } from '../../../../utilities/textShadowLight'

function Envelope (): JSX.Element {
  const currentPrisonerId = useAppSelector((state) => state.gameLogic.currentPrisonerId)
  const [isVisibleEnvelope, setIsVisibleEnvelope] = useState(true)
  const textShadowRefs = useAddShadowLight()

  const closeEnvelope = (): void => {
    setIsVisibleEnvelope(false)
  }
  const openEnvelope = (): void => {
    setIsVisibleEnvelope(true)
  }

  return (
    <>
    <button className='envelope-btn' onClick={openEnvelope} ref={(el) => { textShadowRefs.current![0] = el! }}></button>

    <section className={`modal-window ${isVisibleEnvelope ? '' : 'visually-hidden'}`}>
      <div className='envelope'>
      <button className="closeBtn" onClick={closeEnvelope} ref={(el) => { textShadowRefs.current![2] = el! }}></button>
      <p className="envelope__page">{currentPrisonerId}</p>
      </div>
    </section>
    </>
  )
}

export default Envelope
