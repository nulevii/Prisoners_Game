import React, { useEffect, useState } from 'react'

function Clock ({ timeLeft, timeLimit }: { timeLeft: number, timeLimit: number }): JSX.Element {
  const clockParts = 20
  const leftTimeInPersent = timeLeft / timeLimit
  const clockPart = Math.ceil(leftTimeInPersent * clockParts)

  const generateClassFour = (type: number, part: number): string => {
    const partsInSection = 5
    const sectionBiggestNum = part * partsInSection
    const image = {
      [sectionBiggestNum - 1]: 'image-four',
      [sectionBiggestNum - 2]: 'image-three',
      [sectionBiggestNum - 3]: 'image-two',
      [sectionBiggestNum - 4]: 'image-one'
    }[type]

    if (type <= (sectionBiggestNum - 5)) return 'no-image'
    if (image === undefined) return ''
    return image
  }

  const sectionOneNum = 1
  const sectionTwoNum = 2
  const sectionThreeNum = 3
  const sectionFourNum = 4

  const ClockSectionFour = generateClassFour(clockPart, sectionFourNum)
  const ClockSectionThree = generateClassFour(clockPart, sectionThreeNum)
  const ClockSectionTwo = generateClassFour(clockPart, sectionTwoNum)
  const ClockSectionOne = generateClassFour(clockPart, sectionOneNum)

  return (
    <div className='clock'>
      <div className='time'>00:{Math.ceil(timeLeft)}</div>
      <div className='clock-half'>
        <div className={`clock-section section-four ${ClockSectionFour}`}></div>
        <div className={`clock-section section-one ${ClockSectionOne}`}></div>
      </div>
      <div className='clock-half'>
      <div className={`clock-section section-three ${ClockSectionThree}`}></div>
      <div className={`clock-section section-two ${ClockSectionTwo}`}></div>
      </div>
      <div className='border'></div>
    </div>
  )
}

export default Clock
