import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import WeatherInfo from './WeatherInfo'

import { fetch } from '../../store/action/weather';

class WeatherFetch extends Component {
  render() {
    const { temperature, windSpeed } = this.props
    return (
      <WeatherInfo temperature={temperature} windSpeed={windSpeed} />
    );
  }

  componentDidMount() {
    console.info(this.props)
    this.props.fetch()
  }
}

function mapStateToProps(state) {
  console.info(state)
  return {
    temperature: state.weather.temperature,
    windSpeed: state.weather.windSpeed
  };
}



WeatherFetch.propTypes = {
  fetch: PropTypes.func,
  windSpeed: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  temperature: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
}

export default connect(mapStateToProps, { fetch })(WeatherFetch)
