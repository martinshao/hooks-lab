import React, { useRef } from 'react'

export default function UseRefDemo() {

  const inputRef = useRef(null)

  const handleClick = () => {
    inputRef.current.focus()
  }

  return (
    <>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Focus the input</button>
    </>
  )
}
