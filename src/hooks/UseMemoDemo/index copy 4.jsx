import React, { useState, useMemo, useCallback, memo } from 'react'
import { Button } from 'antd'


const Counter = memo(function (props) {
  console.info('Counter is rendering...')
  return (
    <div onClick={props.onClick}>Counter Count: {props.count}</div>
  )
})

function UseMemoDemo() {
  const [count, setCount] = useState(0)

  const double = useMemo(() => count * 2, [count === 3])

  // const onClick = useMemo(() => (
  //   () => {
  //     console.info('Click...')
  //   }),
  //   []
  // )

  const onClick = useCallback(
    () => {
      console.info('Click...')
    },
    [],
  )

  // useMemo(() => fn)
  // useCallback(fn)

  return (
    <>
      <Button
        onClick={() => setCount(count + 1)}
      >
        count: ({count}),
        double: ({double})
      </Button>
      <Counter count={double} onClick={onClick} />
    </>
  )
}

export default UseMemoDemo
