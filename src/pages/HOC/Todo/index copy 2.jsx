import React from 'react'

function Todo() {
  return (
    <TodoList />
  )
}

function TodoList({ todos }) {
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
