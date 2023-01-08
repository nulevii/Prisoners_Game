import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { InitialStateInterface } from '../../../../store/reducer'
import { useAddShadowLight } from '../../../../utilities/textShadowLight'

function Envelope (): JSX.Element {
  const currentPrisonerId = useSelector((state: InitialStateInterface) => state.currentPrisonerId)
  const textShadowRefs = useAddShadowLight()
  const [isVisibleEnvelope, setIsVisibleEnvelope] = useState(true)

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
