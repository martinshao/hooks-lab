
function withTodosNull(Componnet) {
  return function (props) {
    return !props.withTodosNull
      ? null
      : <Componnet {...props} />
  }
}

export default withTodosNull
