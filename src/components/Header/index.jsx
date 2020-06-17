
import React from 'react'
import { defaultProps } from 'recompose';

import { globalConfig } from './config';

export function Header({ children, siteName }) {
  const heading = siteName && <h1>{siteName}</h1>
  return (
    <div>
      {heading}
      {children}
    </div>
  )
}

export default defaultProps({
  siteName: globalConfig.siteName
})(Header)
