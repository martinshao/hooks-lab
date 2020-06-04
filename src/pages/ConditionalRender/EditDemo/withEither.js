function withEither(conditionalRenderingFn, EitherComponent) {

}

function withEither(conditionalRenderingFn, EitherComponent) {
  return function buildNewComponent(Component) {

  }
}

function withEither(conditionalRenderingFn, EitherComponent) {
  return function buildNewComponent(Component) {
    return function FinalComponent(props) {

    }
  }
}

function withEither(conditionalRenderingFn, EitherComponent) {
  return function buildNewComponent(Component) {
    return function FinalComponent(props) {
      return conditionalRenderingFn(props)
        ? <EitherComponent {...props} />
        : <Component {...props} />;
    }
  }
}

const withEither = (conditionalRenderingFn, EitherComponent) => (Component) => (props) =>
  conditionalRenderingFn(props)
    ? <EitherComponent { ...props } />
    : <Component { ...props } />;