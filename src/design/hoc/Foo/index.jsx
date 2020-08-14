import React, { Component } from 'react'

import resizable from '../resizable'

class Foo extends Component {
  render() {
    const [width, height] = this.props.size
    return (
      <div>
        {width}x{height}
      </div>
    )
  }
}

export default resizable(Foo);
