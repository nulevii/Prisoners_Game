import React from 'react'
import { useAddShadow } from '../../../../utilities/textShadow'

function Envelope (): JSX.Element {
  const textShadowRefs = useAddShadow()

  return (
    <button className='envelope' ref={(el) => { textShadowRefs.current![0] = el! }}></button>
  )
}

export default Envelope
