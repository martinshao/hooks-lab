import React, { useState } from 'react'

import { Button } from '@alicloud/console-components'

function LoginPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <div className="login-page">
      <h1>
        This is a Demo showing several ways to implement Conditional Rendering in React.
      </h1>
      {(function () {
        if (isLoggedIn) {
          return <Button onClick={() => setIsLoggedIn(false)}>Logout</Button>
        } else {
          return <Button onClick={() => setIsLoggedIn(true)}>Login</Button>
        }
      })()}
    </div>
  )
}

export default LoginPage
