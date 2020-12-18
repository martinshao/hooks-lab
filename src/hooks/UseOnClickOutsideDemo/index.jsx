import React, { useRef, useState } from 'react'
import useOnClickOutside from '../useOnClickOutside'

function UseOnClickOutsideDemo() {
  const ref = useRef()

  const [isModalOpen, setModalOpen] = useState(false)
  useOnClickOutside(ref, () => setModalOpen(false))

  return (
    <div style={{width: 400, height: 400, backgroundColor: 'red'}}>
      {
        isModalOpen ? (
          <div ref={ref} style={{width: 200, height: 200, backgroundColor: 'yellowgreen'}}>
            Hey, I'm a modal. click anywhere outside of me to close.
          </div>
        ) : (
            <button onClick={() => setModalOpen(true)}>Open Modal</button>
          )
      }
    </div>
  )
}

export default UseOnClickOutsideDemo