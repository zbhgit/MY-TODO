import {createStore,combineReducers,applyMiddleware,compose} from 'redux'

import {reducer as todoReducer} from './todos'

import Perf from 'react-addons-perf'
import immutable from 'redux-immutable-state-invariant'

const win = window

win.Perf = Perf

const reducer = combineReducers({
  todos: todoReducer
})

const middlewares = []
if (process.env.NODE_ENV !== 'production') {
  middlewares.push(immutable());
}
const storeEnhancers = compose(
  applyMiddleware(...middlewares),
  (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f,
);

export default  createStore(reducer,{},storeEnhancers)