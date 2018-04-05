//@flow
import { REHYDRATE } from 'redux-persist'

const SAVE_CONVERSION = 'history/save_conversion'
const UPDATE_CONVERSIONS = 'history/update_conversions'
const HISTORY_REHYDRATED = REHYDRATE

export const Types = {
    SAVE_CONVERSION,
    UPDATE_CONVERSIONS,
    HISTORY_REHYDRATED
}

export default {
    saveConversion: (conversion: Object) => ({ type: SAVE_CONVERSION, conversion }),
    updateConversions: (conversions: Object) => ({ type: UPDATE_CONVERSIONS, payload: conversions })
}
