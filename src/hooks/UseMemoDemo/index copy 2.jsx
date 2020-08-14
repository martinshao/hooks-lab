import React, { useState, useMemo, memo } from 'react'
import { Button } from 'antd'


const Counter = memo(function (props) {
  return (
    <div>Counter Count: {props.count}</div>
  )
})

function UseMemoDemo() {
  const [count, setCount] = useState(0)

  const double = useMemo(() => count * 2, [count === 3])

  return (
    <>
      <Button
        onClick={() => setCount(count + 1)}
      >
        count: ({count}),
        double: ({double})
      </Button>
      <Counter count={double} />
    </>
  )
}

export default UseMemoDemo
