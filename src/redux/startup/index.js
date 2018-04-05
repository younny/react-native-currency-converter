import { Types } from './actions'

const initialState = {
    setupCompleted: false
}

export default (state=initialState, action) => {
    switch(action.type) {
        case Types.INITIATED:
            return state
        case Types.COMPLETED:
            return {
                ...state,
                setupCompleted: true
            }
        default:
            return state
    }
}
