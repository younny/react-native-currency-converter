import { call, put, select } from 'redux-saga/effects'
import actions from './actions'
import { getRate } from '../converter'

// const mockResponse = require('../../fixtures/rates.json')

export function * getRates(api) {
    const { response, error } = yield call(api.getRates)

    if(response) {
        yield put(actions.getRatesSuccess(response.data.rates))

    } else {
        yield put(actions.getRatesFailure(error))
    }
}

// function * findRate(currency) {
//   const rates = yield select(getRate)
//
//   return _.find(rates, (r) => r.currency == currency).rate
// }
//
// export function * calculate(action) {
//   const { currency, amount } = action
//
//   const rate = yield* findRate(currency)
//
//   yield put(actions.calculationComplete(amount * rate))
// }
