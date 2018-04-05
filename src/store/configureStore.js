/* eslint-disable no-console */
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { persistReducer, persistStore } from 'redux-persist'
import { createLogger } from 'redux-logger'

import config from '../configs/PersistConfig'
import startupActions from '../redux/startup/actions'
// import registerScreens from '../containers'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default (reducers, rootSaga) => {

    const middleware = []
    const enhancers = []

    const sagaMonitor = null
    const sagaMiddleware = createSagaMiddleware({ sagaMonitor })

    middleware.push(sagaMiddleware)
    middleware.push(createLogger())
    enhancers.push(applyMiddleware(...middleware))

    const persistedReducers = persistReducer(config, reducers)

    const store = createStore(persistedReducers, composeEnhancers(...enhancers))

    persistStore(store, {}, () => {
            store.dispatch(startupActions.startup())
        }
    )

    const sagaManager = sagaMiddleware.run(rootSaga)

    return {
        store,
        sagaManager,
        sagaMiddleware
    }
}
