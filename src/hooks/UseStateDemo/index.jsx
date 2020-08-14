import React, { useState } from 'react'
import { Button } from 'antd'

// class UseStateDemo2 extends Component {

//   state = {
//     count: 0
//   }

//   render() {
//     const { count } = this.state
//     return (
//       <Button onClick={() => this.setState(({ count }) => ({ count: count + 1 }))}>Click: {count}</Button>
//     )
//   }
// }

function UseStateDemo(props) {
  const initialState = (props) => {
    console.info('initialState is runing...')
    return props.defaultCount || 0
  }
  const [count, setCount] = useState(initialState(props))

  return (
    <Button onClick={() => setCount(count + 1)}>Click: {count}</Button>
  )
}

export default UseStateDemo
