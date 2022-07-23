import React, { useRef, useEffect, useState } from 'react';

function UseInterval({ count = 5 }) {
  const countRef = useRef(count)
  const [times, setTimes] = useState(countRef.current)
  const [timing, setTiming] = useState(false)

  useEffect(() => {
    let interval;
    if (timing) {
      interval = setInterval(() => {
        setTimes(prev => {
          if (prev <= 1) {
            clearInterval(interval)
            setTiming(false)
            return countRef.current
          }
          return prev - 1
        })
      }, 1000);
    }
    return () => clearInterval(interval)
  }, [timing])

  return (
    <div>
      <button disabled={timing} onClick={() => setTiming(true)}>
        {timing ? `timing ${times}` : 'start'}
      </button>
    </div>
  );
}

export default UseInterval;
