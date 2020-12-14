
import React, { forwardRef, useRef } from 'react'

export default function UseRefDemo() {

  const inputRef = useRef(null)

  const handleClick = () => {
    console.info(inputRef.current)
    inputRef.current.focus()
  }

  return (
    <>
      <TextInput ref={inputRef} />
      <button onClick={handleClick}>Focus the input</button>
    </>
  )
}

const TextInput = forwardRef(
  (props, ref) => (
    <input type="text" ref={ref}/>
  )
)