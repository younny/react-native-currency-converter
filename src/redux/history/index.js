import { Types } from './actions'

const initialState = {
  conversions: {}
}

export default (state=initialState, action) => {
    const { type, payload } = action
    switch(type) {
       case Types.HISTORY_REHYDRATED:
          if(payload)
             return {
               ...state,
               conversions: payload.history.conversions
             }
             return state
        case Types.UPDATE_CONVERSIONS:

            return {
              ...state,
              conversions: payload
            }
        default:
            return state
    }
}


/* ---  selectors --- */
export const getHistory = ({ history }) => history
