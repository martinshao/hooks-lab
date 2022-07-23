import React, { useRef, useState, useEffect } from 'react';

function useOnClickOutSide(ref, handler) {

  useEffect(() => {
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      console.info(event)
      handler(event)
    }

    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)
    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, handler])
}

function UseClickAny() {

  const ref = useRef()
  const [isModalOpen, setModalOpen] = useState(false)
  useOnClickOutSide(ref, () => setModalOpen(false))

  return (
    <div>
      {
        isModalOpen ? (
          <div ref={ref}>
            👋 Hey, I'm a modal. Click anywhere outside of me to close.
          </div>
        ) : (
          <button onClick={() => setModalOpen(true)}>Open Modal</button>
        )
      }
    </div>
  );
}

export default UseClickAny;
