
const withTodosNull = (Component, conditionalRenderingFn) => (props) =>
  conditionalRenderingFn(props)
    ? null
    : <Component {...props} />

const withCondition = (conditionalRenderingFn) => (Component) => (props) =>
  conditionalRenderingFn(props)
    ? null
    : <Component {...props} />

const conditionFn = (props) => !props.todos
const TodoListWithCondition = withCondition(conditionFn);

