import { createStore } from 'redux'
import reducer, { initialState } from './reducer'

export const store = createStore(reducer, initialState)
