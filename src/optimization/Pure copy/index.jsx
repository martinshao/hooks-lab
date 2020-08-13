import React, { Component } from 'react'

import ObjectList from './ObjectList'
import PrimitiveList from './PrimitiveList'

export default class Pure extends Component {

  state = {
    count: 10,
    array: [1, 2, 3],
    dark: false
  }

  handleCountChange = () => {
    const count = this.state.count + 1
    const array = [...this.state.array, count]
    this.setState({
      count, array
    })
  }

  render() {
    const { count, array, dark } = this.state
    const theme = {
      backgroundColor: dark ? '#333' : '#FFF',
      color: dark ? '#FFF' : '#333'
    }
    console.info('Pure component', count, array)
    return (
      <div style={theme}>
        <button onClick={() => this.setState(({ dark: preDark }) => ({ dark: !preDark }))}>Toggle theme</button>
        <button onClick={this.handleCountChange}>Add Count</button>
        <PrimitiveList value={count} />
        <ObjectList value={array} />
      </div>
    )
  }
}
