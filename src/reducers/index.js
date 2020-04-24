import { combineReducers } from 'redux'
import feedReducer from './feedReducer'
import eventReducer from './eventReducer'

const rootReducer = combineReducers({ feedReducer, eventReducer })

export default rootReducer