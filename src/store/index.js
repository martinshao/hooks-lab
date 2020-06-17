import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'
import reducer from './reducer'
import {
  compose,
  createStore,
  applyMiddleware
} from 'redux'

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware)
);

const store = createStore(
  reducer,
  enhancer,
)

sagaMiddleware.run(rootSaga)

export default store