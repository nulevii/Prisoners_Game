import React, { useEffect, useRef, useState } from 'react'
import Plyr from 'plyr'
import 'plyr/dist/plyr.css'

function AboutVideo (): JSX.Element {
  const [showCursor, setShowCursor] = useState(false)
  const [showOverlay, setShowOverlay] = useState(true)
  const plyrRef = useRef<HTMLDivElement & { plyr: { togglePlay: () => void } }>(null)
  const options = {
    controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'captions', 'fullscreen'],
    youtube: { noCookie: true, rel: 0, showinfo: 0, iv_load_policy: 3, modestbranding: 1, cc_load_policy: 0 }
  }
  useEffect(() => {
    const player = new Plyr('.js-plyr', options)
    player.on('enterfullscreen', () => {
      setShowCursor(true)
    })
    player.on('exitfullscreen', () => {
      setShowCursor(false)
    })
    player.on('pause', () => {
      setShowOverlay(true)
    })
    player.on('play', () => {
      setShowOverlay(false)
    })
  }, [])

  return (<div className={`${showCursor ? 'cursor-visible' : 'cursor-hidden'} youtubeWrapper `}>
    <div className={`youtubeOverlay ${showOverlay ? 'imgOverlay' : ''}`} onClick={() => {
      plyrRef.current?.plyr.togglePlay()
    }}
    ></div>
    <div ref={plyrRef} data-plyr-provider="youtube" data-plyr-embed-id="iSNsgj1OCLA" className='js-plyr plyr'>
    </div>
  </div>
  )
}

export default AboutVideo
