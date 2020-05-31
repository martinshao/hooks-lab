import React, { useState, useEffect } from 'react'
import { Button } from '@alicloud/console-components'

const initialState = [
  {
    id: '00211',
    content: 'have dinner',
    time: '2020-02-01',
  },
  {
    id: '00212',
    content: 'take a shower',
    time: '2020-02-11',
  },
  {
    id: '00213',
    content: 'five high',
    time: '2020-05-01',
  },
]

function Todo() {
  const [todos, setTodos] = useState(initialState)
  const [isLoadingTodos, setIsLoadingTodos] = useState(false)

  useEffect(() => {
    return () => {
      setTimeout(() => {
        setIsLoadingTodos(false)
      }, 1000);
    }
  }, [isLoadingTodos])

  return (
    <>
      <Button onClick={() => { setTodos([]) }}>Reset</Button>
      <Button loading={isLoadingTodos} onClick={() => { setIsLoadingTodos(true) }}>loading</Button>
      <TodoList todos={todos} isLoadingTodos={isLoadingTodos} />
    </>
  )
}

function TodoList({ todos, isLoadingTodos }) {
  if (isLoadingTodos) {
    return (
      <div>
        <p>Loading todos...</p>
      </div>
    )
  }
  if (!todos) {
    return null;
  }
  return (
    <div>
      {todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
    </div>
  )
}

function TodoItem({ todo }) {
  return (
    <p>
      <span>{todo.id}</span>
      <span>{todo.content}</span>
      <span>{todo.time}</span>
    </p>
  )
}

export default Todo
