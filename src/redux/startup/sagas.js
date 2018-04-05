import { put, select} from 'redux-saga/effects'
import _ from 'lodash'
import { getHistory } from '../history'
import converterActions from '../converter/actions'
import { Navigation } from 'react-native-navigation'

import actions from './actions'

function * loadLatestConversion() {
    const history = yield select(getHistory)
    const { conversions } = history
    const latest = _.last(Object.keys(conversions))
    if(latest) {
        let fromCurr = latest.substring(0, 3)
        let toCurr = latest.substring(3, 6)
    }
}

export function * setup(action) {

    yield put(converterActions.getRates())

    yield put(actions.setupCompleted())

    Navigation.startSingleScreenApp({
      screen: {
        screen: 'home', // unique ID registered with Navigation.registerScreen
        title: 'Curreny Converter',
        navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
        navigatorButtons: {} // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
      }
    })
}
