
import { fork } from 'redux-saga/effects'
import weatherFlow from '../action/weather'

export default function* rootSaga() {
  yield fork(weatherFlow)
}