import React from 'react'
import { useAddShadowLight } from '../../../../utilities/textShadowLight'

function Envelope (): JSX.Element {
  const textShadowRefs = useAddShadowLight()

  return (
    <button className='envelope' ref={(el) => { textShadowRefs.current![0] = el! }}></button>
  )
}

export default Envelope
