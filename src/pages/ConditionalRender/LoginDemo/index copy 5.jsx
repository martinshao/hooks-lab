import React, { Component } from 'react'
import { Button } from '@alicloud/console-components'

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true
    };
  }
  render() {
    const { isLoggedIn } = this.state
    if (isLoggedIn) {
      return (
        <div className="App">
          <h1>
            This is a Demo showing several ways to implement Conditional Rendering
            in React.
          </h1>
          <Button>Logout</Button>
        </div>
      )
    } else {
      return (
        <div className="App">
          <h1>
            This is a Demo showing several ways to implement Conditional Rendering
            in React.
          </h1>
          <Button>Login</Button>
        </div>
      )
    }
  }
}

export default LoginPage
