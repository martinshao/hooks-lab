import React, { useState, useRef, useCallback, useMemo, memo } from 'react'

import './index.css'
import { useEffect } from 'react';

import {
  createSet,
  createAdd,
  createToggle,
  createRemove
} from './actions'
import reducer from './reducers'

const LS_KEY = '_$-todos_';

let store = {
  todos: [],
  incrementCount: 0,
}

function bindActionCreators(actionCreators, dispatch) {
  const ret = {};

  for (let key in actionCreators) {
    ret[key] = function (...args) {
      const actionCreactor = actionCreators[key]
      const action = actionCreactor(...args)
      dispatch(action)
    }
  }

  return ret;
}

const Control = memo(
  function Control(props) {
    const { addTodo } = props
    const inputRef = useRef()
    const onSubmit = (e) => {
      e.preventDefault();

      const newText = inputRef.current.value.trim();

      if (newText.length === 0) return;

      addTodo(newText)

      inputRef.current.value = '';
    }
    return (
      <div className="control">
        <h1>todos</h1>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            ref={inputRef}
            className="new-todo"
            placeholder="What needs to be done?"
          />
        </form>
      </div>
    )
  }
)

const TodoItem = memo(
  function TodoItem(props) {
    const {
      todo: { id, text, complete },
      removeTodo,
      toggleTodo,
    } = props

    const onChange = () => {
      toggleTodo(id)
    }

    const onRemove = () => {
      removeTodo(id)
    }

    console.info('TodoItem is rendering', id)
    return (
      <li className="todo-item">
        <input
          type="checkbox"
          onChange={onChange}
          checked={complete}
        />
        <label className={complete ? 'complete' : ''}>{text}</label>
        <button className="incorrect" onClick={onRemove}></button>
      </li>
    )
  }
)

const Todos = memo(
  function Todos(props) {
    const { todos, removeTodo, toggleTodo } = props
    return (
      <ul>
        {
          todos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              removeTodo={removeTodo}
              toggleTodo={toggleTodo}
            />
          ))
        }
      </ul>
    )
  }
)

function TodoLists() {

  const [todos, setTodos] = useState([])
  const [incrementCount, setIncrementCount] = useState(0)

  useEffect(() => {
    Object.assign(store, { todos, incrementCount })
  }, [todos, incrementCount])

  const dispatch = useCallback(
    (action) => {
      console.info('dispatch...')

      const setters = {
        todos: setTodos,
        incrementCount: setIncrementCount,
      }

      if ('function' === typeof action) {
        action(dispatch, () => store)
        return;
      }

      const newState = reducer(store, action);

      for (let key in newState) {
        setters[key](newState[key])
      }
    },
    []
  )

  useEffect(() => {
    const todos = JSON.parse(window.localStorage.getItem(LS_KEY) || '[]')
    console.info('localStorage get...')
    dispatch(createSet(todos))
  }, [dispatch])

  useEffect(() => {
    window.localStorage.setItem(LS_KEY, JSON.stringify(todos))
    console.info('localStorage save...')
  }, [todos])

  const controlCreators = useMemo(() => {
    return bindActionCreators({
      addTodo: createAdd
    }, dispatch)
  }, [dispatch])

  const todosCreators = useMemo(() => {
    return bindActionCreators({
      removeTodo: createRemove,
      toggleTodo: createToggle,
    }, dispatch)
  }, [dispatch])

  return (
    <div className="todo-list">
      <Control
        {
        ...controlCreators
        }
      />
      <Todos
        {
        ...todosCreators
        }
        todos={todos}
      />
    </div>
  )
}

export default TodoLists
