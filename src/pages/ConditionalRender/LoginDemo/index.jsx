import React, { useState } from 'react'

import { Button } from '@alicloud/console-components'

const AuthButton = props => {
  let { isLoggedIn, setIsLoggedIn } = props;
  switch (isLoggedIn) {
    case true:
      return <Button onClick={() => setIsLoggedIn(false)}>Logout</Button>
    case false:
      return <Button onClick={() => setIsLoggedIn(true)}>Login</Button>
    default:
      return null
  }
}

function LoginPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div className="login-page">
      <h1>
        This is a Demo showing several ways to implement Conditional Rendering in React.
        <p style={{ color: 'yellowgreen' }}>{isLoggedIn ? 'wellcome...' : 'please login'}</p>
      </h1>
      <AuthButton isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    </div>
  )
}

export default LoginPage
