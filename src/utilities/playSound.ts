import { Howl } from 'howler'

export const playSound = (src: string, vol?: 1.0): void => {
  const sound = new Howl({
    src,
    html5: true,
    volume: 0.4
  })
  sound.play()
}
