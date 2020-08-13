import React from 'react'

class ContextDemo extends React.Component {
  render() {
    return <Toolbar theme="dark" />
  }
}

function Toolbar(props) {
  return (
    <div>
      <ThemeButton theme={props.theme} />
    </div>
  )
}

class ThemeButton extends React.Component {
  render() {
    return <Button theme={this.props.theme} />
  }
}

export default ContextDemo;
