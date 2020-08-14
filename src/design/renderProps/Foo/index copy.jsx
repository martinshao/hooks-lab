import React, { Component } from 'react'

class Foo extends Component {

  state = {
    size: [window.innerWidth, window.innerHeight]
  };

  onResize = () => {
    this.setState({
      size: [window.innerWidth, window.innerHeight]
    });
  };

  componentDidMount() {
    window.addEventListener('resize', this.onResize);
    document.title = this.state.size.join('x')
  }

  componentDidUpdate() {
    document.title = this.state.size.join('x');
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  render() {
    const { size: [width, height] } = this.state
    return (
      <div>{width}x{height}</div>
    )
  }
}

export default Foo;
