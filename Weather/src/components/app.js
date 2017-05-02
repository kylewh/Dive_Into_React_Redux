import React, { Component } from 'react';
import SearchBar from '../containers/search_bar'
import WeatherList from '../containers/weather-list'
import 'bulma/css/bulma.css'
import '../../public/style/style.css'

export default class App extends Component {
  render() {
    return (
      <div className='hero'>
        <div className="hero-head">
          <header className="nav">
            <div className="container is-info">
              <div className="nav-left">
                <a className="nav-item">
                  <img src="../public/img/log.png" alt="Logo" />
                </a>
              </div>
            </div>
          </header>
        </div>
        <div className="hero-body">
          <video autoPlay="autoplay" loop="loop">  
            <source  src="../public/video/The_Slope.webm" type="video/webm" />;  
          </video>  
          <div className="container has-text-centered">
            <SearchBar />
            <WeatherList />
          </div>
        </div>
      </div>
    );
  }
}
