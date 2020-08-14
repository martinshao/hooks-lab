import React, { createContext, useState, useContext, Component } from 'react'
import { Button } from 'antd'

const CountContext = createContext()

class Foo extends Component {
  render() {
    return (
      <CountContext.Consumer>
        {
          count => <div>Foo Count: {count}</div>
        }
      </CountContext.Consumer>
    )
  }
}

class Bar extends Component {
  static contextType = CountContext
  render() {
    const count = this.context
    return (
      <div>Bar Count: {count}</div>
    )
  }
}

function Counter() {
  const count = useContext(CountContext)
  return (
    <div>Counter Count: {count}</div>
  )
}

function UseContextDemo() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Button onClick={() => setCount(count + 1)}>count: {count}</Button>
      <CountContext.Provider value={count}>
        <Foo />
        <Bar />
        <Counter />
      </CountContext.Provider>
    </>
  )
}

export default UseContextDemo
