import prisonerOne from '../assets/images/characters/prisoners/prisoner1.png'
import prisonerTwo from '../assets/images/characters/prisoners/prisoner2.png'
import prisonerThree from '../assets/images/characters/prisoners/prisoner3.png'
import prisonerFour from '../assets/images/characters/prisoners/prisoner4.png'

import mert from '../assets/images/characters/guards/guard_mert.png'
import squid from '../assets/images/characters/guards/pink_soldier.png'
import wetmore from '../assets/images/characters/guards/percy_wetmore.png'
import starling from '../assets/images/characters/guards/clarice_starling.png'
import laverne from '../assets/images/characters/guards/laverne_hooks.png'
import hopps from '../assets/images/characters/guards/judy_hopps.png'

import boxOne from '../assets/images/game/boxes/boxOne.png'
import boxTwo from '../assets/images/game/boxes/boxTwo.png'
import boxThree from '../assets/images/game/boxes/boxThree.png'

export const PRISONERS_IMG_ARR = [prisonerOne, prisonerTwo, prisonerThree, prisonerFour] as const
export const BOXES_IMG_ARR = [boxOne, boxTwo, boxThree] as const

export const GUARDS_IMGS = { mert, squid, wetmore, starling, laverne, hopps } as const

export const TABLE_NUMBERS_ARR = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'tvelve',
  'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty']

export const BOX_TABLE_POSITIONS: [2, 1, 0] = [2, 1, 0]

export const BOX_QTT = 60

export const PRISONERS_QTT_INCREASE_STEP = +10
export const PRISONERS_QTT_DECREASE_STEP = -10

export const TIME_LIMIT_INCREASE_STEP = +5
export const TIME_LIMIT_DECREASE_STEP = -5
