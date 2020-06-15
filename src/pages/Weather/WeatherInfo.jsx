import React from 'react'

function WeatherInfo({ temperature, windSpeed }) {
  const windInfo = windSpeed === 0 ? 'calm' : `${windSpeed} km/h`
  return (
    <div className="weather">
      <div>Tempperature: {temperature}℃</div>
      <div>Wind: {windInfo}</div>
    </div>
  )
}

export default WeatherInfo
