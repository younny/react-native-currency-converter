import storage from 'redux-persist/lib/storage'
//import ImmutableReconciler from '../libs/ImmutableReconciler'
import { ImmutableTransformer } from '../libs/ImmutableTransformer'

export default {
    key: 'history',
    storage,
    transforms: [ImmutableTransformer],
    whitelist: ['history'],
    blacklist: ['converter']
    // stateReconciler: [ImmutableReconciler()]
}
