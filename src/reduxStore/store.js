import { createStore } from 'redux'
import reducer from './reducers'
import thunk from 'redux-thunk'
import logger from './logger'
import { applyMiddleware } from 'redux'

const middleware=applyMiddleware(thunk,logger);

const store=createStore(reducer,middleware);

export default store;