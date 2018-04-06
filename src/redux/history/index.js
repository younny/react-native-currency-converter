import Immutable from 'seamless-immutable'
import { Types } from './actions'

const initialState = Immutable([])

export default (state=initialState, action) => {
  const { type, payload } = action
    switch(type) {
     case Types.HISTORY_REHYDRATED:
        if(payload) return state.concat(payload.history)
        return state
      case Types.UPDATE_CONVERSIONS:
        return state.concat(payload)
      default:
        return state
  }
}
