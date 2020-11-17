
import React, { useCallback, useLayoutEffect, useRef, useState } from 'react'

export default function UseCallbackDemo() {
  const [text, updateText] = useState('')
  const textRef = useRef();

  useLayoutEffect(() => {
    console.info('useLayoutEffect exec...')
    textRef.current = text
  })

  const handleSubmit = useCallback(
    () => {
      console.info('useCallback exec...')
      const currentText = textRef.current
      console.info(currentText)
    },
    [textRef],
  )

  return (
    <>
      <input type="text" value={text} onChange={(e) => updateText(e.target.value)} />
      <ExpensiveComponent onSubmit={handleSubmit} />
    </>
  )
}

function ExpensiveComponent({ onSubmit }) {
  console.info('ExpensiveComponent re-rendering...')
  return (
    <button onClick={onSubmit}>Click</button>
  )
}
