import React from 'react'
import { useAppDispatch } from '../../../store/hooks'
import { setShowAbout } from '../../../store/features/main-menu/mainMenuSlice'

import inna from '../../../assets/images/about/inna.png'
import zhenya from '../../../assets/images/about/zhenya.png'
import sasha from '../../../assets/images/about/sasha.png'

import AboutVideo from './about-video'
import { useAddShadowLight } from '../../../utilities/textShadowLight'

const AboutSection: React.FC = function () {
  const dispatch = useAppDispatch()
  const textShadowRefs = useAddShadowLight()

  const onHideAbout = (): void => {
    dispatch(setShowAbout(false))
  }

  return (
    <div className="aboutDiv">
      <button className="closeBtn" onClick={onHideAbout} ref={(el) => { textShadowRefs.current![0] = el! }}>
      </button>
      <p className="aboutVideoText">Video</p>
      <AboutVideo />
      <p className="aboutText">
        This game was created with love on the basis of a prisoner riddle whose solution is so unintuitive that it`s hard to believe at first glance, and hard to believe at second glance, too. You can watch the video above for more details.
      </p>
      <div className="aboutUs">
        <div className="aboutPortrait aboutPortrait1">
          <img src={zhenya} alt="Developer" />
          <p className="aboutPortraitText"> Cherniugov Y.</p>
          <p className="aboutPortraitText">Developer</p>
        </div>
        <div className="aboutPortrait aboutPortrait2">
          <img src={inna} alt="Developer" />
          <p className="aboutPortraitText"> Forkert I.</p>
          <p className="aboutPortraitText">Developer</p>
        </div>
        <div className="aboutPortrait aboutPortrait3">
          <img src={sasha} alt="Designer" />
          <p className="aboutPortraitText">Miakisheva S.</p>
          <p className="aboutPortraitText"> Designer</p>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
