import React, { Component } from 'react'
import { connect } from 'react-redux'
import Chart from '../components/chart'
import GoogleMap from '../components/googleMap'

class WeatherList extends Component {

  renderWeather (cityData) {
    const name = cityData.city.name
    const temps = cityData.list.map(weather => weather.main.temp)
    const press = cityData.list.map(weather => weather.main.pressure)
    const humds = cityData.list.map(weather => weather.main.humidity)
    const { lon, lat }  = cityData.city.coord

    return (
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td><Chart data={temps} color='#00d1b2' units='K'></Chart></td>
        <td><Chart data={press} color='#d12a00' units='hPa'></Chart></td>
        <td><Chart data={humds} color='#FFEB3B' units='%'></Chart></td>
      </tr>
    )
  }

  render () {
    if (!this.props.weather.length) {
      return (
        <section className='hero is-primary is-medium has-text-centered no-data'>
          <div className='hero-body'>
            <div className='container is-fluid'>
              <span className='icon'><i className='fa fa-database fa-4'></i></span>
              <h1 className='title'>
                No data passed in yet.
              </h1>
            </div>
          </div>
        </section>
      )
    }
    return (
      <div className="container is-fluid">
        <table className='table is-bordered is-striped'>
          <thead>
            <tr>
              <th>City</th>
              <th>Temperature (K)</th>
              <th>Pressure (hPa)</th>
              <th>Humidity (%)</th>
            </tr>
          </thead>
          <tbody>
            {this.props.weather.map(this.renderWeather)}
          </tbody>
        </table>
      </div>
    )
  }
}

// Pass in a state
function mapStateToProps (state) {
  return { weather: state.weather }
}

export default connect(mapStateToProps)(WeatherList)
