import { Types } from './actions'


const initialState = {
    rates: null,
    error: null,
    fetching: false
}

export default (state=initialState, action) => {
    switch(action.type) {
        case Types.GET_RATES_REQUEST:
            return {
              ...state,
              fetching: true
            }
        case Types.GET_RATES_SUCCESS:
            return {
              ...state,
              fetching: false,
              rates: action.payload
            }
        case Types.GET_RATES_FAILURE:
            return {
              ...state,
              fetching: false,
              error: action.payload
            }
        default:
            return state
    }
}
