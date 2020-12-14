import React, { useEffect, useRef, useState } from 'react'

export default function UseRefDemo() {
  const [temp, setTemp] = useState(5);
  const tempRef = useRef(temp)

  useEffect(() => {
    tempRef.current = temp
  }, [temp])

  const log = () => {
    console.info('log...')
    setTimeout(() => {
      console.log("3 秒前 temp = 5，现在 temp =", temp);
    }, 3000);
  };
  console.info('render...')
  return (
    <button
      onClick={() => {
        setTemp(3);
        log();
        // 3 秒前 temp = 5，现在 temp = 5
      }}
    >
      xyz
    </button>
  );
}
