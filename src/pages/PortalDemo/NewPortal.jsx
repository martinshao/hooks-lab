import { Component } from 'react'
import ReactDOM from 'react-dom'

class NewPortal extends Component {

  constructor(props) {
    super(props)

    this.node = document.createElement('div')
    document.body.append(this.node)
  }

  render() {
    const { children } = this.props
    return ReactDOM.createPortal(
      children,
      this.node,
    )
  }
}

export default NewPortal
