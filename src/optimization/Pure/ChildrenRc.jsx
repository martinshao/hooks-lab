import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ChildrenRc extends Component {
  static propTypes = {
    value: PropTypes.arrayOf(PropTypes.number).isRequired,
  }

  shouldComponentUpdate(nextProps) {
    console.info('ChildrenRc...shouldComponentUpdate')
    return nextProps.value.length !== this.props.value.length
  }

  render() {
    console.info('ChildrenRc...render')
    return this.props.value.map(num => <div key={num}>{num}</div>)
  }
}

export default ChildrenRc
