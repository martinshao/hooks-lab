import React, { useRef, useState, useEffect, PureComponent } from 'react'
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

function useCount(defaultCount) {
  const [count, setCount] = useState(defaultCount)
  const it = useRef()


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

  return [count, setCount]
}

function UseCustomer() {
  const [count, setCount] = useCount(0)
  return (
    <>
      <Button
        onClick={() => setCount(count + 1)}
      >
        count: ({count})
      </Button>
      <Counter count={count} />
    </>
  )
}

export default UseCustomer
