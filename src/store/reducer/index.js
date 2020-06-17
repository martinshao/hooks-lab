import {
  combineReducers
} from 'redux'

import todoReducer from './todos'
import weatherReducer from './weather'

const reducer = combineReducers({
  todos: todoReducer,
  weather: weatherReducer,
})

export default reducer