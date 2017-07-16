import {createStore, combineReducers, applyMiddleware, compose} from 'redux'

import {reducer as todoReducer} from './todos'
import {reducer as signUpreducer} from './signUp'

import Perf from 'react-addons-perf'
import immutable from 'redux-immutable-state-invariant'
import createHistory from 'history/createBrowserHistory'
import {routerMiddleware, routerReducer} from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'

export const history = createHistory()
const historyMiddleware = routerMiddleware(history)

const win = window

win.Perf = Perf

const reducer = combineReducers({
  todos: todoReducer, 
  userinfo: signUpreducer, 
  router: routerReducer
})

const middlewares = [thunkMiddleware, historyMiddleware]
if (process.env.NODE_ENV !== 'production') {
  middlewares.push(immutable());
}
const storeEnhancers = compose(applyMiddleware(...middlewares), (win && win.devToolsExtension)
  ? win.devToolsExtension()
  : (f) => f,);

export const store = createStore(reducer, {}, storeEnhancers)
