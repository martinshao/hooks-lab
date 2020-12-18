import React, { useState, useEffect } from 'react'
import useMemoCompare from '../useMemoCompare';

function UseMemoCompareDemo({obj}) {
  const [state, setState] = useState();

  const objFinal = useMemoCompare(obj, (prev, next) => {
    return prev && prev.id === next.id
  })

  useEffect(() => {
    return objFinal.someMethod().then((value) => setState(value))
  }, [objFinal])

  useEffect(() => {
    return obj.someMethod().then(value => setState(value))
    // eslint-disable-next-line
  }, [obj.id])

  return (
    <div>This is a handsom man.
      <span>{state}</span>
    </div>
  )
}

export default UseMemoCompareDemo