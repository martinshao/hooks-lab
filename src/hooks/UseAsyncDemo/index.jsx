import React, { useCallback, useEffect, useState, useLayoutEffect } from 'react'

function UseAsyncDemo() {
  const { execute, status, value, error } = useAsync(myFunction)

  const handleClick = useCallback(() => {
    console.info('handleClick...')
  }, [])

  useEffect(() => {
    console.info('useEffect***')
  }, [handleClick])

  console.info('%cUseAsyncDemo rendering...', 'color: deepskyblue')

  return (
    <div>
      {status === 'idle' && <div>Start your journey by clicking a button</div>}
      {status === 'success' && <div>{value}</div>}
      {status === 'error' && <div>{error}</div>}
      <button onClick={execute} disabled={status === 'pending'}>
        {status !== 'pending' ? 'Click me' : 'Loading...'}
      </button>
      <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default UseAsyncDemo

const myFunction = () => {
  console.info('myFunction')
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const rnd = Math.random() * 10
      rnd <= 5
        ? resolve('Submitted successfully')
        : reject('Oh no there was an error')
    }, 2000)
  })
}

const useAsync = (asyncFunction, immediate = true) => {
  const [status, setStatus] = useState('idle')
  const [value, setValue] = useState(null)
  const [error, setError] = useState(null)

  console.info('useAsync wrapper...')

  const execute = useCallback(
    () => {
      console.info('execute...')

      setStatus('pending')
      setValue(null)
      setError(null)
      console.info('setState end...')
      return asyncFunction().then(
        response => {
          setValue(response)
          setStatus('success')
        }
      ).catch(error => {
        setError(error)
        setStatus('error')
      })
    },
    [asyncFunction],
  )

  useLayoutEffect(() => {
    console.info('%cuseLayoutEffect...', 'color: #e96a25')
  })

  useEffect(() => {
    console.info('%cuseEffect...', 'color: #dcff93')
    if (immediate) {
      execute()
    }
  }, [execute, immediate])

  return { execute, status, value, error }
}