import React, { useState } from 'react'

import ObjectList from './ObjectList'
import PrimitiveList from './PrimitiveList'


function Memo() {

  const [count, setCount] = useState(10)
  const [array, setArray] = useState([0, 1, 2])
  const [dark, setDark] = useState(false)

  const theme = {
    backgroundColor: dark ? '#333' : '#FFF',
    color: dark ? '#FFF' : '#333'
  }

  return (
    <div style={theme}>
      <button onClick={() => setDark(preDark => !preDark)}>Toggle theme</button>
      <button onClick={() => setCount(count + 1)}>Add Count</button>
      <button onClick={() => setArray([...array, array.length])}>array change</button>
      <PrimitiveList value={count} />
      <ObjectList value={array} />
    </div>
  )
}

export default Memo
