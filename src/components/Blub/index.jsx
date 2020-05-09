import React, { useState, useEffect } from 'react'

const buzz = (options) => {
  setTimeout(() => {
    console.info(options)
  }, 1000);
}

function Foo({ bar, baz }) {
  // const options = { bar, baz }
  const [count, setCount] = useState(3)
  useEffect(() => {
    console.info('%c Foo is useEffect...', 'color:lightcoral')
    const options = { bar, baz }
    buzz(options)
  }, [bar, baz]) // we want this to re-run if bar or baz change
  console.info('%c Foo is rendering...', 'color:khaki')
  return (
    <>
      <div>foobar</div>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>add</button>
    </>
  )
}

function Blub() {
  const [loading, setLoading] = useState(false)
  console.info('%c Blub is rendering...', 'color:deepskyblue')
  // const bar = () => {}
  // const baz = [1, 2, 3]
  const bar = React.useCallback(() => { }, [])
  const baz = React.useMemo(() => [1, 2, 3], [])
  return (
    <>
      {
        loading && <div>loading</div>
      }
      <button onClick={() => setLoading(!loading)}>change</button>
      <Foo bar={bar} baz={baz} />
      {/* <Foo bar={'bar'} baz={3} /> */}
    </>
  )
}

export default Blub