import React, { useState } from 'react'

import { Button } from '@alicloud/console-components'

function LoginPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const renderAuthButton = () => {
    if (isLoggedIn) {
      return <Button onClick={() => setIsLoggedIn(false)}>Logout</Button>
    } else {
      return <Button onClick={() => setIsLoggedIn(true)}>Login</Button>
    }
  }
  return (
    <div className="login-page">
      <h1>
        This is a Demo showing several ways to implement Conditional Rendering in React.
      </h1>
      {renderAuthButton()}
    </div>
  )
}

export default LoginPage
