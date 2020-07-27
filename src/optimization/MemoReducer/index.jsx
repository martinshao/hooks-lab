import React, { useReducer } from 'react'
import { Button } from 'antd'

import ObjectList from './ObjectList'
import PrimitiveList from './PrimitiveList'

const mr10 = {
  marginRight: 12
}

const initialState = {
  count: 10,
  array: [0, 1, 2],
  dark: false,
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'DEC_COUNT': return { ...state, count: state.count + 1 };
    case 'TOGGLE_THEME': return { ...state, dark: !state.dark };
    case 'CHANGE_ARRAY': return { ...state, array: [...state.array, state.array.length] };
    default: throw new Error('Unexpected action');
  }
}

function MemoReducer() {

  const [state, dispatch] = useReducer(reducer, initialState)

  const theme = {
    backgroundColor: state.dark ? '#333' : '#FFF',
    color: state.dark ? '#FFF' : '#333'
  }

  return (
    <div style={theme}>
      <Button style={mr10} type="primary" onClick={() => dispatch({ type: 'TOGGLE_THEME' })}>Toggle theme</Button>
      <Button style={mr10} type="primary" onClick={() => dispatch({ type: 'DEC_COUNT' })}>Add Count</Button>
      <Button style={mr10} type="primary" onClick={() => dispatch({ type: 'CHANGE_ARRAY' })}>array change</Button>
      <PrimitiveList value={state.count} />
      <ObjectList value={state.array} />
    </div>
  )
}

/******************************************** v1 ********************************************/
// const initialState = 0

// const reducer = (state, action) => {
//   switch (action) {
//     case 'increment': return state + 1;
//     case 'decrement': return state - 1;
//     case 'reset': return 0;
//     default: throw new Error('Unexpected action');
//   }
// }

// function MemoReducer() {
//   const [count, dispatch] = useReducer(reducer, initialState)
//   return (
//     <>
//       <Tag>{count}</Tag>
//       <Button style={mr10} type="primary" onClick={() => dispatch('increment')}>+1</Button>
//       <Button style={mr10} type="primary" onClick={() => dispatch('decrement')}>-1</Button>
//       <Button type="primary" onClick={() => dispatch('reset')}>reset</Button>
//     </>
//   )
// }

/******************************************** v2 ********************************************/

// const init = (initialCount) => initialCount

// const reducer = (state, action) => {
//   switch (action) {
//     case 'increment': return state + 1;
//     case 'decrement': return state - 1;
//     case 'reset': return 0;
//     default: throw new Error('Unexpected action');
//   }
// }

// function MemoReducer({ initialCount = 1 }) {
//   const [count, dispatch] = useReducer(reducer, initialCount, init)
//   return (
//     <>
//       <Tag>{count}</Tag>
//       <Button style={mr10} type="primary" onClick={() => dispatch('increment')}>+1</Button>
//       <Button style={mr10} type="primary" onClick={() => dispatch('decrement')}>-1</Button>
//       <Button type="primary" onClick={() => dispatch('reset')}>reset</Button>
//     </>
//   )
// }

/******************************************** v3 ********************************************/

// const init = (initialCount) => ({ count: initialCount })

// const reducer = (state, action) => {
//   switch (action) {
//     case 'increment': return { count: state.count + 1 };
//     case 'decrement': return { count: state.count - 1 };
//     case 'reset': return 0;
//     default: throw new Error('Unexpected action');
//   }
// }

// function MemoReducer({ initialCount = 5 }) {
//   const [state, dispatch] = useReducer(reducer, initialCount, init)
//   return (
//     <>
//       <Tag>{state.count}</Tag>
//       <Button style={mr10} type="primary" onClick={() => dispatch('increment')}>+1</Button>
//       <Button style={mr10} type="primary" onClick={() => dispatch('decrement')}>-1</Button>
//       <Button type="primary" onClick={() => dispatch('reset')}>reset</Button>
//     </>
//   )
// }

/******************************************** v4 ********************************************/

// const init = (initialCount) => ({ count: initialCount })

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'increment': return { count: state.count + 1 };
//     case 'decrement': return { count: state.count - 1 };
//     case 'reset': return init(action.payload);
//     default: throw new Error('Unexpected action');
//   }
// }

// function MemoReducer({ initialCount = 5 }) {
//   const [state, dispatch] = useReducer(reducer, initialCount, init)
//   return (
//     <>
//       <Tag>{state.count}</Tag>
//       <Button style={mr10} type="primary" onClick={() => dispatch({ type: 'increment' })}>+1</Button>
//       <Button style={mr10} type="primary" onClick={() => dispatch({ type: 'decrement' })}>-1</Button>
//       <Button type="primary" onClick={() => dispatch({ type: 'reset', payload: initialCount })}>reset</Button>
//     </>
//   )
// }

export default MemoReducer
