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

  componentDidMount() {
    const that = this
    console.info('WeatherFetch...')
    axios.get('/api/weather.json').then(function (response) {
      const { current } = response.data;
      that.setState({
        temperature: current.temperature,
        windSpeed: current.windSpeed
      })
    });
  }
}

export default WeatherFetch