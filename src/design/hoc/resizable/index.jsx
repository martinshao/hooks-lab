import React, {Component} from 'react'

function resizable(Child) {
  return class Wrapper extends Component {
    state = {
      size: [window.innerWidth, window.innerHeight]
    }
  
    onResize = () => {
      this.setState({
        size: [window.innerWidth, window.innerHeight]
      })
    }
  
    componentDidMount() {
      window.addEventListener('resize', this.onResize)
    }
  
    componentWillUnmount() {
      window.removeEventListener('resize', this.onResize)
    }
  
    render() {
      const {size} = this.state
      return <Child size={size} />
    }
  }
}

export default resizable
