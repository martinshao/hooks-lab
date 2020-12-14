import React, { useEffect, useState } from 'react'

export default function UseRefDemo() {

  const [count, setCount] = useState(0)

  useEffect(() => {
    console.info('add effect')
    const id = setInterval(() => {
      setCount(count => count + 1)
    }, 1000);
    // console.info('count: ', count)
    return () => {
      console.info('del effect')
      clearInterval(id)
    }
  }, [])

  return <h1>{count}</h1>
}
