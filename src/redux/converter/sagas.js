import { call, put } from 'redux-saga/effects'
import actions from './actions'

const mockResponse = require('../../fixtures/rates.json')

export function * getRates(api) {
    const { response, error } = yield call(api.getRates)

    if(response) {
        //yield put(actions.getRatesSuccess(response.data))
        yield put(actions.getRatesSuccess(mockResponse.rates))
    } else {
        //yield put(actions.getRatesFailure(error))
        yield put(actions.getRatesSuccess(mockResponse.rates))
    }
}
