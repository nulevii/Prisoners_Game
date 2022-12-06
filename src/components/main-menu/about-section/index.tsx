import React from 'react'
import { useDispatch } from 'react-redux'
import { showAbout } from '../../../store/actions'

const AboutSection: React.FC = function () {
  const dispatch = useDispatch()

  const onHideSettings = (): void => {
    dispatch(showAbout(false))
  }
  return (
    <div className='aboutDiv'>
        <button className='closeBtn' onClick={onHideSettings}>X</button>
        <p className='aboutVideoText'>Video</p>
        <p className='aboutText'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, voluptatibus!</p>
        <div className="aboutUs">
          <div className="aboutPortrait aboutPortrait1"><span className='aboutPortraitText'>Developer</span></div>
          <div className="aboutPortrait aboutPortrait2"><span className='aboutPortraitText'>Developer</span></div>
          <div className="aboutPortrait aboutPortrait3"><span className='aboutPortraitText'> Designer</span></div>
        </div>
    </div>

  )
}

export default AboutSection
