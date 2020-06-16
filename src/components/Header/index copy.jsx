
import React from 'react'
import { globalConfig } from './config';

function Header({ children }) {
  console.info('globalConfig...', globalConfig)
  const heading =
    globalConfig.siteName ? <h1>{globalConfig.siteName}</h1> : null
  return (
    <div>
      {heading}
      {children}
    </div>
  )
}

export default Header
