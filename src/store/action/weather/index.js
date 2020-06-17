import { call, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'

export function fetch() {
  console.info('%cfetch...', 'color: gold')
  return {
    type: 'FETCH'
  };
}

export default function* () {
  yield takeEvery('FETCH', function* () {
    console.info('%csaga...', 'color: deepskyblue')
    const response = yield call(axios.get, '/api/weather.json')
    const { temperature, windSpeed } = response.data.current
    yield put({
      type: 'FETCH_SUCCESS',
      temperature,
      windSpeed
    });
  });
}