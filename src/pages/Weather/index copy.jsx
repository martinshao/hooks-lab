import React from 'react'
import axios from 'axios'
// Problem: A component with multiple responsibilities 
class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = { temperature: 'N/A', windSpeed: 'N/A' };
  }

  render() {
    const { temperature, windSpeed } = this.state;
    return (
      <div className="weather">
        <div>Temperature: {temperature}°C</div>
        <div>Wind: {windSpeed}km/h</div>
      </div>
    );
  }

  componentDidMount() {
    const that = this
    axios.get('/api/weather.json').then(function (response) {
      const { current } = response.data;
      that.setState({
        temperature: current.temperature,
        windSpeed: current.windSpeed
      })
    });
  }
}

export default Weather