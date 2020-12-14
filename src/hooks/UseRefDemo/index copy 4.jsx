
import React, { forwardRef, useImperativeHandle, useRef } from 'react'

export default function UseRefDemo() {

  const inputRef = useRef(null)

  const handleClick = () => {
    console.info(inputRef.current)
    inputRef.current.focus()
  }

  const getData = () => {
    console.info('getData: ', inputRef.current.data)
  }

  const getType = () => {
    console.info('getType: ', inputRef.current.getType)
  }

  return (
    <>
      <TextInput ref={inputRef} />
      <button onClick={handleClick}>Focus the input</button>
      <button onClick={getType}>GET TYPE</button>
      <button onClick={getData}>GET DATA</button>
    </>
  )
}

const TextInput = forwardRef(
  (props, ref) => {

    const inputRef = useRef();

    useImperativeHandle(ref, () => ({
      data: inputRef.current.value,
      getType: inputRef.current.type,
      focus: () => {
        inputRef.current.focus();
      }
    }));

    return (
      <input type="text" ref={inputRef} {...props} />
    )
  }
)