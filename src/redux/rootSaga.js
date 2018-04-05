import { all, takeLatest } from 'redux-saga/effects'

import API from '../services/Api'

/* ------ Action Types ------ */
import { Types as StartupActionTypes } from './startup/actions'
import { Types as ConverterActionTypes } from './converter/actions'
import { Types as HistoryActionTypes } from './history/actions'

/* ------ Sagas ------ */
import { setup } from './startup/sagas'
import { getRates } from './converter/sagas'
import { saveConversion } from './history/sagas'

const api = API.create()

export default function * root() {
    yield all([
        takeLatest(StartupActionTypes.INITIATED, setup),
        takeLatest(ConverterActionTypes.GET_RATES_REQUEST, getRates, api),
        takeLatest(HistoryActionTypes.SAVE_CONVERSION, saveConversion)
    ])
}