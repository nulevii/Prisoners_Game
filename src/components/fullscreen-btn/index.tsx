import React, { Component, ReactElement } from 'react'

interface FSState {
  isFullScreen: boolean
}

class FullScreenBtn extends Component<{}, FSState> {
  constructor (props: {}) {
    super(props)
    this.checkFullscreen = this.checkFullscreen.bind(this)
  }

  state: FSState = {
    isFullScreen: false
  }

  componentDidMount (): void {
    document.addEventListener('fullscreenchange', this.checkFullscreen)
  }

  componentWillUnmount (): void {
    document.removeEventListener('fullscreenchange', this.checkFullscreen)
  }

  toggleFullscreen (): void {
    if (document.fullscreenElement != null) {
      void document.exitFullscreen()
    } else {
      void document.documentElement.requestFullscreen()
    }
  }

  checkFullscreen (): void {
    this.setState((prevState) => ({
      isFullScreen: !prevState.isFullScreen
    }))
  }

  render (): ReactElement {
    return (<button type='button' name='fullscreen' className={`fullscreen-btn ${this.state.isFullScreen ? 'fullscreen-btn--closed' : ''}`} onClick={this.toggleFullscreen}></button>)
  }
}

export default FullScreenBtn
