import { put, select } from 'redux-saga/effects'
import actions from './actions'
import { getHistory } from '../history'

export function * saveConversion(action) {
   const { KEY, DATE, RATE } = action.conversion

   const { conversions } = yield select(getHistory)

   if(conversions[KEY]) {
     conversions[KEY].push({ DATE, RATE })
   }else {
     conversions[KEY] = [{ DATE, RATE }]
   }
   yield put(actions.updateConversions(conversions))
}
