import React, { Component } from 'react';
import axios from 'axios';

import apiKey from './Components/config/config';

import Header from './Components/Header';
import Search from './Components/Search';
import Current from './Components/Current';
import Weather from './Components/Weather';

import './App.css';

class App extends Component {
    constructor(props) {
      super(props);
      this.getWeatherData = this.getWeatherData.bind(this);

      this.state = {
        currentWeather: '',
        forecastWeather: '',
        currentData: false,
        forecastData: false
      }
  }

  getWeatherData = (city) => {
    var weatherType = ['weather','forecast'];

    weatherType.forEach(type => {
      axios({
        url: `https://api.openweathermap.org/data/2.5/${type}?q=${city}&units=metric&APPID=${apiKey}`,
        method: 'get'
      }).then(response => {
          // get the userID
          console.log(response.data);
          if(type === 'weather') {
            this.setState({
              currentWeather: response.data,
              currentData: true
            });
          } else if (type === "forecast") {
            this.setState({
              forecastWeather: response.data,
              forecastData: true
            });
          }
      }).catch(error => { 
          console.log('Error fetching and parsing data', error);
      });
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Search getWeatherData={this.getWeatherData}/>

        {this.state.currentData ? <Current weather={this.state.currentWeather}/> : null}
        {this.state.forecastData ? <Weather forecastWeather={this.state.forecastWeather}/> : null}
          
      </div>
    );
  }
}

export default App;
