import { HEART_COUNTER_INCREMENT } from '../actions/types'


const initialState = 0

export default function heartCounter(state=initialState, action) {
  switch (action.type) {
    case HEART_COUNTER_INCREMENT:
      return state + 1
    default:
      return state
  }
}

