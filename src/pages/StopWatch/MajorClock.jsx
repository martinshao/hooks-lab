import React from 'react'
import padStart from 'lodash/padStart';

const time2Str = (time) => padStart(time, 2, '0')
const time3Str = (time) => padStart(time, 3, '0')

const ms2Time = (milliseconds) => {
  let time = milliseconds;
  const ms = milliseconds % 1000;
  time = (milliseconds - ms) / 1000;
  const seconds = time % 60;
  time = (time - seconds) / 60;
  const minutes = time % 60;
  const hours = (time - minutes) / 60;

  return `${time2Str(hours)}:${time2Str(minutes)}:${time2Str(seconds)}:${time3Str(ms)}:`
}

const MajorClock = ({ milliseconds = 0 }) => {
  return <h1>{ms2Time(milliseconds)}</h1>
}

export default MajorClock