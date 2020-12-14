import React, { forwardRef, useImperativeHandle, useRef } from 'react'

const TextInput = forwardRef(
  (props, ref) => {
    const inputRef = useRef(null)

    useImperativeHandle(
      ref,
      () => ({
        focus: () => inputRef.current.focus()
      }))

    return (
      <input type="text" ref={inputRef} />
    )
  }
)

export default TextInput
