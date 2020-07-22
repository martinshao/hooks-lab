import React, { useState, useCallback } from 'react'
import List from './List'

function CallbackDemo() {
  console.info('CallbackDemo...starting')
  const [number, setNumber] = useState(1)
  const [dark, setDark] = useState(false)

  const getItems = useCallback((incrementor) => {
    console.info('useCallback running...', incrementor)
    return [number, number + 1, number + 2]
  }, [number])

  const theme = {
    backgroundColor: dark ? '#333' : '#FFF',
    color: dark ? '#FFF' : '#333'
  }
  console.info('CallbackDemo...ending')
  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={e => setNumber(parseInt(e.target.value || 0))}
      />
      <button onClick={() => setDark(prevDark => !prevDark)}>
        Toggle theme
      </button>
      <List getItems={getItems} />
    </div>
  )
}

export default CallbackDemo

