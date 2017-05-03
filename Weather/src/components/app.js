import React, { Component } from 'react';
import SearchBar from '../containers/search_bar'
import WeatherList from '../containers/weather-list'
import 'bulma/css/bulma.css'
import '../../public/style/style.css'

export default class App extends Component {
  render() {
    return (
      <div className='hero main-ct'>
        <div className="hero-head">
          <header className="nav">
            <div className="container is-info">
              <div className="nav-left">
                <a className="nav-item">
                  <img src="http://om8hmotom.bkt.clouddn.com/log.png" alt="Logo" />
                </a>
              </div>
            </div>
          </header>
        </div>
        <div className='weather-bg'></div>
        <div className="hero-body">

          <div className="container weather-data has-text-centered">
            <SearchBar />
            <WeatherList />
          </div>
        </div>
      </div>
    );
  }
}
