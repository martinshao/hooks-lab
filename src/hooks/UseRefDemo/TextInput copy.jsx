import React, { forwardRef } from 'react'

export default forwardRef(
  (props, ref) => (
    <input type="text" ref={ref} />
  )
)
