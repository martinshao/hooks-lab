
import { fork } from 'redux-saga/effects'
import weatherFlow from '../actions/weather'

export default function* rootSaga() {
  yield fork(weatherFlow)
}