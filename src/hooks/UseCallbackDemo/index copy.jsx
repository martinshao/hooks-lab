import React, { memo, useCallback, useState, useMemo } from 'react'

export default function UseCallbackDemo() {
  const [count, setCount] = useState(1)

  const expensiveComputer = useMemo(() => {
    console.info('expensive computer...')
    return 1 + 1
  }, [])

  const step = useCallback(
    () => {
      console.info('a console info')
    },
    [],
  )
  // const step = () => console.info('a console info')

  return (
    <>
      <div>Count: {count}</div>
      <button onClick={() => setCount(() => count + 1)}>Step Click</button>
      <Button step={step} />
      <div>{expensiveComputer}</div>
    </>
  )
}

const Button = memo(
  ({ step }) => {
    console.info('Button re-render...')
    return (
      <button style={{ backgroundColor: 'yellowgreen' }} onClick={() => step()}>Click!</button>
    )
  }
)