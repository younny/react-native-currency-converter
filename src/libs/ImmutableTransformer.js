import { createTransform } from 'redux-persist'
import Immutable from 'seamless-immutable'

const isImmutable = a => Immutable.isImmutable(a);

const convertToPojo = state => state.asMutable({ deep: true })

const fromImmutable = a => (isImmutable(a) ? convertToPojo(a) : a)

const toImmutable = raw => Immutable(raw);

const ImmutableTransformer = createTransform(

  state => fromImmutable(state),

  state => toImmutable(state)

)

export { ImmutableTransformer }
