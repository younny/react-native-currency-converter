import configureStore from './configureStore'
import rootSaga from '../redux/rootSaga'
import reducers from '../redux/reducers'

const createStore = () => {
    let { store, sagaManager, sagaMiddleware } = configureStore(reducers, rootSaga)
    if(module.hot) {
        module.hot.accept(() => {
            const nextRootReducer = reducers
            store.replaceReducer(nextRootReducer)

            const newYieldedSagas = rootSaga
            sagaManager.cancel()
            sagaManager.done.then(() => {
                sagaManager = sagaMiddleware.run(newYieldedSagas)
            })
        })
    }
    return store
}

// export const selectors = {
//     return {
//       getRates: (state) => state.converter.rates,
//       getHistory: (state) => state.history
//   }
// }

export default createStore()
