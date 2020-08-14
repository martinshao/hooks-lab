import React, { useState, useMemo } from 'react'
import { Button } from 'antd'


function Counter(props) {
  return (
    <div>Counter Count: {props.count}</div>
  )
}

function UseMemoDemo() {
  const [count, setCount] = useState(0)

  const double = useMemo(() => count * 2, [count])

  return (
    <>
      <Button
        onClick={() => setCount(count + 1)}
      >
        count: ({count}),
        double: ({double})
      </Button>
      <Counter count={count} />
    </>
  )
}

export default UseMemoDemo
