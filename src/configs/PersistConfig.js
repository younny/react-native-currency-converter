import storage from 'redux-persist/lib/storage'
//import immutableTransform from 'redux-persist-transform-immutable'
//import immutableTransform from '../services/ImmutableTransform'

//import hardSet from 'redux-persist/lib/stateReconciler/hardSet'

export default {
    key: 'history',
    storage,
    transforms: [],
    whitelist: ['history']
    //stateReconciler: hardSet
}
