import React, { useState, useEffect } from 'react'

import { compose } from 'recompose'
import { Button } from '@alicloud/console-components'
/**
 * https://www.robinwieruch.de/react-higher-order-components
 */
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

const EmptyMessage = () => (
  <div>
    <p>You have no Todos...</p>
  </div>
)

const LoadingIndicator = () => (
  <div>
    <p>Loading todos...</p>
  </div>
)

const isLoadingConditionFn = (props) => props.isLoadingTodos;
const nullConditionFn = (props) => !props.todos;
const isEmptyConditionFn = (props) => !props.todos.length;

const withMaybe = (conditionalRenderingFn) => (Component) => (props) =>
  conditionalRenderingFn(props)
    ? null
    : <Component {...props} />

const withEither = (conditionalRenderingFn, EitherComponent) => (Component) => (props) =>
  conditionalRenderingFn(props)
    ? <EitherComponent />
    : <Component {...props} />

const withConditionalRenderings = compose(
  withEither(isLoadingConditionFn, LoadingIndicator),
  withMaybe(nullConditionFn),
  withEither(isEmptyConditionFn, EmptyMessage)
)

const TodoListWithConditionalRendering = withConditionalRenderings(TodoList);

function Todo() {
  const [todos, setTodos] = useState(initialState)
  const [isLoadingTodos, setIsLoadingTodos] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsLoadingTodos(false)
    }, 3000);
  }, [isLoadingTodos])

  return (
    <>
      <Button onClick={() => { setTodos([]) }}>Reset</Button>
      <Button type="primary" onClick={() => { setTodos(null) }}>Reset null</Button>
      <Button loading={isLoadingTodos} onClick={() => { setIsLoadingTodos(true) }}>loading</Button>
      <TodoListWithConditionalRendering todos={todos} isLoadingTodos={isLoadingTodos} />
    </>
  )
}

function TodoList(props) {
  return (
    <div>
      {props.todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
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
