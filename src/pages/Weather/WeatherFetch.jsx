import React, { Component } from 'react'
import axios from 'axios'
import WeatherInfo from './WeatherInfo'

class WeatherFetch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      temperature: 'N/A',
      windSpeed: 'N/A',
    }
  }

  render() {
    const { temperature, windSpeed } = this.state
    return (
      <WeatherInfo temperature={temperature} windSpeed={windSpeed} />
    )
  }

  async componentDidMount() {
    const { data } = await axios.get('/api/weather.json')
    const { current } = data
    this.setState({
      temperature: current.temperature,
      windSpeed: current.windSpeed
    })
  }
}

export default WeatherFetch