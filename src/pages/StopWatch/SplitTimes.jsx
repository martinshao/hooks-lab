import React from 'react'
import PropTypes from 'prop-types'

import MajorClock from './MajorClock'

function SplitTimes({ splits = [] }) {
  return splits.map(
    (value, idx) => (
      <MajorClock key={idx} milliseconds={value} />
    )
  )
}

SplitTimes.propTypes = {
  splits: PropTypes.arrayOf(PropTypes.number),
}

export default SplitTimes
