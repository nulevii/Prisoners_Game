import React, { useState } from 'react'
import { useAppDispatch } from '../../store/hooks'
import { setShowRules } from '../../store/features/main-menu/mainMenuSlice'
import { useAddShadowLight } from '../../utilities/textShadowLight'

const Rules: React.FC = function () {
  const dispatch = useAppDispatch()
  const onHideRules = (): void => {
    dispatch(setShowRules(false))
  }
  const textShadowRefs = useAddShadowLight()
  const [zIndex, setZIndex] = useState([4, 3, 2, 1])
  const [disabledArrows, setDisabledArrows] = useState(false)
  const [current, setCurrent] = useState({ page: 1, animatedPage: 0 })

  const rulesText = [
    '1 In this game you are a prisoner, one among many. Your task is to escape. Guards want to play a game with you, in which you cannot win. At least, they think so.',
    '2 You and your cellmates must find all the Keys from the Main Gate in the boxes that Guards prepared for you in the Common Room. Every box has a number on it and a different number in it. There are as many boxes, as the prisoners.', // Both numbers equal to the quantity of prisoners.
    "3 The prisoners enter the room one by one and try to find the number inside the box that matches their Prisoner ID. The keys are inside those boxes. I suppose you remember your ID, as it's printed on your uniform. Numbers never change!",
    "4 Each player... sorry, each prisoner can only open half of the boxes in the room. If you don't find your number, better luck next time! Of course, there will be no next time. In fact, if at least one of your cellmates doesn't find their number, the game is over."
  ]

  function changePage (direct: string): void {
    if (!disabledArrows) {
      setDisabledArrows(true)

      if (direct === 'left') {
        setCurrent((prev) => {
          return {
            page: prev.page - 1,
            animatedPage: prev.page
          }
        })
        setZIndex(prev => prev.map(el => {
          if (el === 1) {
            return 3
          }
          if (el === 3) {
            return 0
          }
          return el
        })
        )
        setTimeout(
          () =>
            setZIndex((prev) => {
              setDisabledArrows(false)
              return prev.map((el) => {
                if (el === 3) {
                  return 4
                }
                if (el === 0) {
                  return 2
                }
                return el - 1
              })
            }),
          500
        )
      } else {
        setCurrent((prev) => {
          return {
            page: prev.page + 1,
            animatedPage: prev.page
          }
        })
        setTimeout(
          () =>
            setZIndex((prev) => {
              setDisabledArrows(false)
              return prev.map((el) => {
                if (el === 4) {
                  return 1
                }
                return el + 1
              })
            }),
          500
        )
      }
    }
  }

  return (
    <div className="rulesDiv">
      <button
        className="closeBtn"
        onClick={onHideRules}
        ref={(el) => {
          textShadowRefs.current![2] = el!
        }}
      ></button>
      <p
        className={
          current.animatedPage === 1
            ? 'animatedText rulesText'
            : 'rulesText'
        }
        style={{ zIndex: zIndex[0] }}
        key={rulesText[0]}
      >
        {rulesText[0]}
      </p>
      <p
        className={
          current.animatedPage === 2
            ? 'animatedText rulesText'
            : 'rulesText'
        }
        key={rulesText[1]}
        style={{ zIndex: zIndex[1] }}
      >
        {rulesText[1]}
      </p>
      <p
        className={
        current.animatedPage === 3
          ? 'animatedText rulesText'
          : 'rulesText'
        }
        key={rulesText[2]}
        style={{ zIndex: zIndex[2] }}
      >
        {rulesText[2]}
      </p>
      <p
        className={
          current.animatedPage === 4
            ? 'animatedText rulesText'
            : 'rulesText'
        }
        key={rulesText[3]}
        style={{ zIndex: zIndex[3] }}
      >
        {rulesText[3]}
      </p>
      <button
        className={`rulesLeft rulesArrow ${current.page === 1 ? 'visually-hidden' : ''}`}
        onClick={() => changePage('left')}
        ref={(el) => {
          textShadowRefs.current![0] = el!
        }}
      ></button>
      <button
        className={`rulesRight rulesArrow ${current.page === 4 ? 'visually-hidden' : ''}`}
        onClick={() => changePage('right')}
        id="rulesArrowRight"
        ref={(el) => {
          textShadowRefs.current![1] = el!
        }}
      ></button>
    </div>
  )
}

export default Rules
