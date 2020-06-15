import React from 'react'

function WeatherInfo({ temperature, windSpeed }) {
  return (
    <div className="weather">
      <div>Tempperature: {temperature}℃</div>
      <div>Wind: {windSpeed} km/h</div>
    </div>
  )
}

export default WeatherInfo
