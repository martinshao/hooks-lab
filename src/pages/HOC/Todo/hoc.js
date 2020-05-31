
const withTodosNull = (Component, conditionalRenderingFn) => (props) =>
  conditionalRenderingFn(props)
    ? null
    : <Component {...props} />

const withCondition = (conditionalRenderingFn) => (Component) => (props) =>
  conditionalRenderingFn(props)
    ? null
    : <Component {...props} />

const withMaybe = (conditionalRenderingFn) => (Component) => (props) =>
  conditionalRenderingFn(props)
    ? null
    : <Component {...props} />

const withEither = (conditionalRenderingFn, EitherComponent) => (Component) => (props) =>
  conditionalRenderingFn(props)
    ? <EitherComponent />
    : <Component {...props} />

const conditionFn = (props) => !props.todos
const TodoListWithCondition = withCondition(conditionFn);

