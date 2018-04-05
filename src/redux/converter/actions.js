//@flow
const GET_RATES_REQUEST = 'converter/get_rates'
const GET_RATES_SUCCESS = 'converter/get_rates_success'
const GET_RATES_FAILURE = 'converter/get_rates_failure'

export const Types = {
    GET_RATES_REQUEST,
    GET_RATES_SUCCESS,
    GET_RATES_FAILURE
}

export default {
    getRates: () => ({ type: GET_RATES_REQUEST }),
    getRatesSuccess: (payload: Object) => ({ type: GET_RATES_SUCCESS, payload }),
    getRatesFailure: (payload: Object) => ({ type: GET_RATES_FAILURE, payload })
}