import React, { Component } from 'react'

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

export default Foo;
