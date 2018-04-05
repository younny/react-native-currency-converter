import { combineReducers } from 'redux'

import startup from './startup'
import converter from './converter'
import history from './history'

const reducers = combineReducers({
    startup,
    converter,
    history
})

export default reducers