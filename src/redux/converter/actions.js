//@flow
const GET_RATES_REQUEST = 'converter/get_rates'
const GET_RATES_SUCCESS = 'converter/get_rates_success'
const GET_RATES_FAILURE = 'converter/get_rates_failure'
// const CAL_COMPLETE = 'converter/calculation_complete'
// const CALCULATE = 'converter/calculate'

export const Types = {
    GET_RATES_REQUEST,
    GET_RATES_SUCCESS,
    GET_RATES_FAILURE,
    // CALCULATE,
    // CAL_COMPLETE
}

export default {
    getRates: () => ({ type: GET_RATES_REQUEST }),
    getRatesSuccess: (payload: Object) => ({ type: GET_RATES_SUCCESS, payload }),
    getRatesFailure: (payload: Object) => ({ type: GET_RATES_FAILURE, payload }),
    // calculate: (currency: string, amount: number) => ({ type: CALCULATE }),
    // calculationComplete: (payload: number) => ({ type: CAL_COMPLETE, payload })
}
