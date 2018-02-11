import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer.js'

const initialState = {}
const middleware = [thunk]

const composedEnhancers = compose(applyMiddleware(...middleware))

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
)

export default store
