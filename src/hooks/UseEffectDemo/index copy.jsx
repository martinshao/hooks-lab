import React, { Component } from 'react'
import { Button } from 'antd'

class UseEffectDemo extends Component {
  state = {
    count: 0,
    size: {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
    }
  }

  onResize = () => {
    this.setState({
      size: {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
      }
    })
  }

  componentDidMount() {
    document.title = this.state.count
    window.addEventListener('resize', this.onResize, false)
  }
  componentDidUpdate() {
    document.title = this.state.count
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize, false)
  }

  render() {
    const { count, size: { width, height } } = this.state
    return (
      <Button
        onClick={() => this.setState({ count: count + 1 })}
      >
        Click: ({count})
        size: {width}x{height}
      </Button>
    )
  }
}

export default UseEffectDemo
