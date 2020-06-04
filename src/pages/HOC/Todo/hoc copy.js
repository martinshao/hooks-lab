
const withTodosNull = (Component, conditionalRenderingFn) => (props) =>
  conditionalRenderingFn(props)
    ? null
    : <Component {...props} />

const withCondition = (Component, conditionalRenderingFn) => (props) =>
  conditionalRenderingFn(props)
    ? null
    : <Component {...props} />

const conditionFn = (props) => !props.todos
const TodoListWithCondition = withCondition(TodoList, conditionFn);

