import React from 'react'
import useHistory from '../useHistory'

import './styles.scss'

function UseHistoryDemo() {
  const { state, set, undo, redo, clear, canUndo, canRedo } = useHistory({})

  return (
    <div className="container">
      <div className="controls">
        <div className="title">Click squares to draw</div>
        <button onClick={undo} disabled={!canUndo}>
          Undo
        </button>
        <button onClick={redo} disabled={!canRedo}>
          Redo
        </button>
        <button onClick={clear}>Clear</button>
      </div>

      <div className="grid">
        {(
          (blocks, i, len) => {
            while (++i <= len) {
              const index = i
              blocks.push(
                <div
                  className={`block ${state[index] ? 'active' : ''}`}
                  onClick={() => set({ ...state, [index]: !state[index] })}
                  key={i}
                />
              )
            }
            return blocks
          }
        )([], 0, 625)}
      </div>
    </div>
  )
}

export default UseHistoryDemo
