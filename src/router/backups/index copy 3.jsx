import './App.css'
import React, { useReducer } from 'react'
import Button from '@alicloud/console-components'

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case 'increment': return state + 1;
    case 'decrement': return state - 1;
    case 'reset': return 0;
    default: throw new Error('Unexpected action');
  }
}

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      {count}
      <Button onClick={() => dispatch('increment')}>+1</Button>
      <Button onClick={() => dispatch('decrement')}>-1</Button>
      <Button onClick={() => dispatch('reset')}>reset</Button>
    </div>
  )
}

export default App;
