
import React, { memo, useCallback, useState, useRef, useLayoutEffect } from 'react'

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

const ExpensiveComponent = memo(
  ({ onSubmit }) => {
    console.info('ExpensiveComponent re-rendering...')
    return (
      <button onClick={onSubmit}>Click</button>
    )
  }
)

