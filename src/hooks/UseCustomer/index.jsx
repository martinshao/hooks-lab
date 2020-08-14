import React, { useRef, useState, useEffect, useCallback } from 'react'
import { Button } from 'antd'


function useCounter(count) {
  return (
    <h1>{count}</h1>
  )
}

function useCount(defaultCount) {
  const [count, setCount] = useState(defaultCount)
  const it = useRef()


  useEffect(() => {
    it.current = setInterval(() => {
      setCount(count => count + 1)
    }, 1000)
    return () => {
      clearInterval(it.current)
    }
  }, [])

  useEffect(() => {
    if (count >= 10) {
      clearInterval(it.current)
    }
  })

  return [count, setCount]
}

function useSize() {
  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
  })

  const onResize = useCallback(() => {
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
    })
  }, [])

  useEffect(() => {
    window.addEventListener('resize', onResize, false)
    return () => {
      window.removeEventListener('resize', onResize, false)
    }
  }, [onResize])

  return [size, setSize]
}

function UseCustomer() {
  const [count, setCount] = useCount(0)
  const [size] = useSize()
  const Counter = useCounter(count)
  return (
    <>
      <Button
        onClick={() => setCount(count + 1)}
      >
        count: ({count})
      </Button>
      <span>{size.width}x{size.height}</span>
      {Counter}
    </>
  )
}

export default UseCustomer
