import React from 'react'

const ThemeContext = React.createContext('light')

class ContextDemo extends React.Component {
  render() {
    return (
      <ThemeContext.Provider>
        <Toolbar />
      </ThemeContext.Provider>
    )
  }
}

function Toolbar() {
  return (
    <div>
      <ThemeButton />
    </div>
  )
}

class ThemeButton extends React.Component {
  static contextType = ThemeContext
  render() {
    return <Button theme={this.context} />
  }
}

export default ContextDemo;
