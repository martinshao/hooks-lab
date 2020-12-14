import React, { useRef, useMemo, useState, useEffect, useCallback, PureComponent } from 'react'
import { Button } from 'antd'


// const Counter = memo(function (props) {
//   console.info('Counter is rendering...')
//   return (
//     <div onClick={props.onClick}>Counter Count: {props.count}</div>
//   )
// })

class Counter extends PureComponent {

  speak = () => {
    console.info('Counter speak...')
  }

  render() {
    console.info('Counter is rendering...')
    return (
      <div onClick={this.props.onClick}>Counter Count: {this.props.count}</div>
    )
  }
}

function UseRefDemo() {
  const [count, setCount] = useState(0)
  const [clickCount, setClickCount] = useState(0)
  const counterRef = useRef()
  const it = useRef()

  const double = useMemo(() => count * 2, [count])

  const onClick = useCallback(
    () => {
      console.info('Click...')
      setClickCount(cc => cc + 1)
      counterRef.current.speak()
    },
    [counterRef],
  )

  useEffect(() => {
    it.current = setInterval(() => {
      setCount(count => count+1)
    }, 1000)
  }, [])

  useEffect(() => {
    if(count >= 10) {
      clearInterval(it.current)
    }
  })

  return (
    <>
      <Button
        onClick={() => setCount(count + 1)}
      >
        count: ({count}),
        double: ({double})
      </Button>
      <Counter ref={counterRef} count={double} clickCount={clickCount} onClick={onClick} />
    </>
  )
}

export default UseRefDemo
