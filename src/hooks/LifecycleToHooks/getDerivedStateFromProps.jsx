/* eslint-disable */
import React, { Component, useState } from 'react'

class Counter1 extends Component {
  state = {
    overflow: false,
  };
  static getDerivedStateFromProps(props, state) {
    if(props.count > 10) {
      return {
        overflow: true
      }
    }
  }
}

function Counter2(props) {
  const [overflow, setOverflow] = useState(false)
  if(props.count > 10) {
    setOverflow(true)
  }
}