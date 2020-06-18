import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

import {
  todoReducer,
  weatherReducer,
} from './reducer'

const rootReducer = combineReducers({
  todos: todoReducer,
  weather: weatherReducer,
})

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

export default store