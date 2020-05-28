import React from 'react'

function RenderIf({ condition, children }) {
  return <>{condition && children}</>
}

export default RenderIf
