import { put } from 'redux-saga/effects'
import actions from './actions'

export function * saveConversion(action) {
   yield put(actions.updateConversions(action.conversion))
}
