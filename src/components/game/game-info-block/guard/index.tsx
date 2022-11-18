import React from 'react'

const Guard: React.FC = function () {
  return (<div className="guard" style={{ display: 'flex' }} >
      <div className="guard__message" style={{ display: 'flex', padding: '40px' }} >
        Funny Joke
      </div>
      <div className="guard__info">
        <p>Guard Name</p>
        <img
          src="https://dinopixel.com/preload/1021/Squid-game-guard-.png"
          alt="PrisonersArray[0].prisonerNumber"
          style={{
            width: '100px'
          }}
        />
        <p>Security Guard</p>
      </div>
    </div>
  )
}

export default Guard
