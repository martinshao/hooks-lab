import React, { useState, useEffect } from 'react'

function Foo() {
  const [size, setSize] = useState([window.innerWidth, window.innerHeight])

  useEffect(() => {
    document.title = size.join('X')
  })

  const onResize = () => {
    setSize([window.innerWidth, window.innerHeight])
  };

  useEffect(() => {
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    }
  })

  return (
    <div>
      {size[0]}x{size[1]}
    </div>
  )
}

export default Foo;
