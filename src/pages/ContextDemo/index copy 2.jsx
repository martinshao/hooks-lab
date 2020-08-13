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
  render() {
    return (
      <ThemeContext.Consumer>
        {
          theme => (
            <Button theme={theme} />
          )
        }
      </ThemeContext.Consumer>
    )
  }
}

export default ContextDemo;
