import React from 'react'
import { useState, useMemo } from 'react'

export default function MemoDemo() {
  const [count, setCount] = useState(100)
  const [changeNum, setChangeNum] = useState(100)
  const computeValue = useMemo(() => computeExpensiveValue(count), [count]);
  function computeExpensiveValue(count) {
    console.info('expensive computed is runing')
    const array = new Array(count).fill(count)
    return array.reduce((total, curr) => total + curr, 0)
  }

  const handleCountChange = () => {
    setCount(preCount => preCount * 2)
  }

  const handleNumChange = () => {
    setChangeNum(preNum => preNum * 2)
  }

  return (
    <div>
      <div>{computeValue}</div>
      <div>{`${count}---${changeNum}`}</div>
      <button onClick={handleCountChange}>Double Count</button>
      <button onClick={handleNumChange}>Double Num</button>
    </div>
  )
}
