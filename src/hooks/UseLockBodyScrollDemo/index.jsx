import React, { useState } from 'react'
import useLockBodyScroll from "../useLockBodyScroll"

import './styles.scss'


function UseLockBodyScrollDemo() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div>
      <div className="bar">
        <button onClick={() => setModalOpen(true)}>Show Modal</button>
      </div>
      <Content />
      {
        modalOpen && (
          <Modal
            title="Try scrolling"
            content="I bet you you can't Muahahaha"
            onClose={() => setModalOpen(false)}
          />
        )
      }
    </div>
  )
}

function Modal({ title, content, onClose }) {
  useLockBodyScroll()

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal">
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  )
}

const Content = () => {
  const terms = [
    'stars',
    'birds',
    'puppy',
    'nature',
    'show',
    'cafe',
    'hipster',
    'startup',
    'salad',
    'funny'
  ]

  const images = terms.map((term, i) => (
    <img key={i} src={`https://source.unsplash.com/random/800x200?${term}`} alt={term}/>
  ))
  return <div className="images">{images}</div>
}

export default UseLockBodyScrollDemo