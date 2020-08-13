import React, { Component, lazy, Suspense } from 'react'

const About = lazy(() => import(/* webpackChunkName: "about" */'./About.jsx'));

// ErrorBoundary -> componentDidCatch

class LazyDemo extends Component {

  static getDerivedStateFromError() {
    return {
      hasError: true
    }
  }

  state = {
    hasError: false,
  }

  componentDidCatch(error, errorInfo) {
    console.log('..............')
    console.info(error, errorInfo)
  }

  render() {
    if(this.state.hasError) {
      return <h1>ERROR</h1>
    }

    return (
      <div>
        <Suspense fallback={<div>loading</div>}>
          <About />
        </Suspense>
      </div>
    )
  }
}

export default LazyDemo; 
