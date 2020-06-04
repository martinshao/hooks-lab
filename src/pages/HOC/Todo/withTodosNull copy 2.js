
const withTodosNull = (Component) => (props) =>
  !props.todos
    ? null
    : <Component {...props} />

export default withTodosNull
