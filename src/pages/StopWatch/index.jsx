import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MajorClock from './MajorClock'
import ControlButtons from './ControlButtons'

class StopWatch extends Component {
  static propTypes = {
    prop: PropTypes
  }

  constructor() {
    super(...arguments)

    this.state = {
      isStarted: false,
      startTime: null,
      currentTime: null,
      splits: [],
    }
  }


  render() {
    return (
      <>
        <MajorClock />
        <ControlButtons />
        <SplitTimes splits={this.state.splits} />
      </>
    )
  }
}

export default StopWatch
