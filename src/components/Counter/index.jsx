/* eslint-disable */
import React, { useState, useRef, useReducer, useEffect } from 'react'

// /**
//  *
//  *
//  * @export
//  * @returns
//  */
// export default function Counter() {
//   const [count, setCount] = useState(0)

//   console.info('...1')
//   function handleAlertClick() {
//     console.info('...3')
//     setTimeout(() => {
//       alert('You clicked on: ' + count)
//     }, 3000)
//   }
//   console.info('...2')
//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>
//         Click me
//       </button>
//       <button onClick={handleAlertClick}>
//         Show alert
//       </button>
//     </div>
//   )
// }

export default function Counter() {
  const [count, setCount] = useState(0)
  // const latestCount = useRef(count)
  console.info('...1')

  // useEffect(() => {
  //   console.info('...3')
  //   document.title = `You clicked ${count} times`
  // })

  // useEffect(() => {
  //   console.info('...3')
  //   setTimeout(() => {
  //     console.info('...4')
  //     console.log(`You clicked ${count} times`)
  //   }, 3000)
  // })

  useEffect(() => {
    // Set the mutable latest value
    // latestCount.current = count
    setTimeout(() => {
      // Read the mutable latest value
      console.log(`You clicked ${count} times`)
      // console.log(`You clicked ${latestCount.current} times`)
    }, 3000)
    return (() => {
      console.info('count: ', count)
    })
  })

  // useEffect(() => {
  //   console.info('effect action...')
  //   const id = setInterval(() => {
  //     setCount(count + 1)
  //   }, 3000)
  //   return () => {
  //     console.info('clear action...')
  //     clearInterval(id)
  //   }
  // }, [count])

  // console.info('...2')
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  )
}

// export default function Counter() {
//   const [count, setCount] = useState(0)
//   const [step, setStep] = useState(1)

//   useEffect(() => {
//     const id = setInterval(() => {
//       setCount(c => c + step)
//     }, 1000)
//     return () => clearInterval(id)
//   }, [step])

//   return (
//     <>
//       <h1>{count}</h1>
//       <input value={step} onChange={e => setStep(Number(e.target.value))} />
//     </>
//   )
// }

// const initialState = {
//   count: 0,
//   step: 1,
// }

// function reducer(state, action) {
//   const { count, step } = state
//   console.log(`%cThis is reducer...${JSON.stringify(action)}`, "color:gold")
//   if (action.type === 'tick') {
//     return { count: count + step, step }
//   } else if (action.type === 'step') {
//     return { count, step: action.step }
//   } else {
//     throw new Error()
//   }
// }

// export default function Counter() {
//   const [state, dispatch] = useReducer(reducer, initialState)
//   const { count, step } = state

//   useEffect(() => {
//     console.info(`%cEffect is start....${count}`, "color:deepskyblue")
//     const id = setInterval(() => {
//       dispatch({ type: 'tick' })
//     }, 1000)
//     return () => {
//       console.info(`%cThis is clearing...${count}`, "color:orangered")
//       clearInterval(id)
//     }
//   }, [dispatch])

//   console.info(`%cThis is rending....${count}`, "color: yellowgreen")
//   return (
//     <div style={{ padding: 20, margin: 20, background: '#777777' }}>
//       <h1>{count}</h1>
//       <input value={step} onChange={e => {
//         dispatch({
//           type: 'step',
//           step: Number(e.target.value)
//         })
//       }} />
//     </div>
//   )
// }

// export default function Counter({ initialCount }) {
//   const [count, setCount] = useState(initialCount)
//   return (
//     <>
//       Count: {count}
//       <button onClick={() => setCount(initialCount)}>Reset</button>
//       <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
//       <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
//     </>
//   )
// }

// import React, { Component } from 'react'

// export default class Counter extends Component {

//   state = {
//     count: 0
//   }

//   componentDidUpdate() {
//     setTimeout(() => {
//       console.log(`You clicked ${this.state.count} times`)
//     }, 3000)
//   }

//   render() {
//     const { count } = this.state
//     return (
//       <>
//         <p>You clicked {count} times</p>
//         <button onClick={() => this.setState({ count: count + 1 })}>
//           Click me
//       </button>
//       </>
//     )
//   }
// }
