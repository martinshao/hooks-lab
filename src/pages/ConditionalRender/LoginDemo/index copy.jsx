import React, { useState } from 'react'

import { Button } from '@alicloud/console-components'

function LoginPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <div className="login-page">
      <h1>
        This is a Demo showing several ways to implement Conditional Rendering in React.
      </h1>
      <Button>Login</Button>
      <Button>Logout</Button>
    </div>
  )
}

export default LoginPage
