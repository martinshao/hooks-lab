
const withTodosNull = (Component) => (props) => props.todos && <Component {...props} />

export default withTodosNull
