import React, { useRef, useEffect } from 'react';

const useInterval = (cb, delay) => {
  const cbRef = useRef(cb)
  useEffect(() => {
    const timeout = setTimeout(() => {
      cbRef.current()
    }, delay)
    return () => clearTimeout(timeout)
  }, [delay])
}

function UseInterval() {

  const greety = () => console.info('Hello world!')

  useInterval(greety, 2000)

  return (
    <div>
      test useInterval
    </div>
  );
}

export default UseInterval;
