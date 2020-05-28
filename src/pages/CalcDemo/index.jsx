import React, { Component } from 'react'
import { Button } from '@alicloud/console-components'

export class CalcDemo extends Component {

  state = {
    login: false,
    visible: false,
  }

  get isVisible() {
    const { login, visible } = this.state
    return login && visible
  }

  login = () => this.setState({ login: true })
  logout = () => this.setState({ login: false })

  render() {
    const { login, visible } = this.state
    return (
      <div>
        {login ? <Button onClick={this.logout}>logout</Button> : <Button type="primary" onClick={this.login}>login</Button>}
        <Button onClick={() => this.setState({ visible: !visible })}>Toggle visible</Button>
        <h1>{this.isVisible ? 'isOk' : 'notOk'}</h1>
      </div>
    )
  }
}

export default CalcDemo
