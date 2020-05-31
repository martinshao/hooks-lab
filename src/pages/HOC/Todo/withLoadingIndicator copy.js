
const withLoadingIndicator = (Component) => (props) =>
  props.isLoadingTodos
    ? <div><p>Loading todos...</p></div>
    : <Component {...props} />

export default withLoadingIndicator
