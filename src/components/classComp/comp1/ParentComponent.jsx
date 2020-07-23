import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ParentComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
    this.handleParent = this.handleParent.bind(this)
  }

  handleChildren() {
    console.info('clicked ChildrenComponent')
  }

  handleParent() {
    console.info('clicked ParentComponent')
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleParent}>
          {`ParentComponent${this.state.count}`}
        </button>
        <ChildrenComponent
          handleChildren={this.handleChildren}
        />
      </div>
    )
  }
}


class ChildrenComponent extends React.PureComponent {
  static propTypes = {
    handleChildren: PropTypes.func,
  }

  render() {
    const { handleChildren } = this.props
    console.info('ChildrenComponent rending')
    return <div onClick={handleChildren}>ChildrenComponent</div>
  }
}