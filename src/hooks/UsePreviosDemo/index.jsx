import React, { useState } from 'react'
import usePrevious from '../usePrevious'

function UsePreviosDemo() {
  const [count, setCount] = useState(0)
  const prevCoutn = usePrevious(count)
  return (
    <div>
      <h1>Now: {count}, before: {prevCoutn}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default UsePreviosDemo