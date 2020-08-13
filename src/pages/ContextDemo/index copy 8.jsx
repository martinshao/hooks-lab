import React, { Component, createContext } from 'react'

const BatteryContext = createContext(30)
const OnlineContext = createContext()

class Leaf extends Component {
  render() {
    return (
      <BatteryContext.Consumer>
        {
          battery => (
            <OnlineContext.Consumer>
              {
                online => <h1>battery: {battery}, online: {String(online)}</h1>
              }
            </OnlineContext.Consumer>
          )
        }
      </BatteryContext.Consumer>
    )
  }
}

class Middle extends Component {
  render() {
    return <Leaf />
  }
}

class ContextDemo extends Component {
  state = {
    online: false,
    battery: 60,
  }
  render() {
    const { online, battery } = this.state
    return (
      <BatteryContext.Provider value={battery}>
        <OnlineContext.Provider value={online}>
          <button type="button" onClick={() => this.setState({ online: !online })}>Switch</button>
          <button type="button" onClick={() => this.setState(({ battery }) => ({ battery: battery - 1 }))}>Press</button>
          <Middle />
        </OnlineContext.Provider>
      </BatteryContext.Provider>
    )
  }
}

export default ContextDemo;
