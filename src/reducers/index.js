import { combineReducers } from 'redux'
import feedReducer from './feedReducer'
import eventReducer from './eventReducer'
import memberReducer from './memberReducer'

const rootReducer = combineReducers({ feedReducer, eventReducer, memberReducer })

export default rootReducer