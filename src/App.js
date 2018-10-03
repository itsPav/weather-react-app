import React, { Component } from 'react';
import axios from 'axios';

import apiKey from './Components/config/config';
import Search from './Components/Search';
import Weather from './Components/Weather';

import './App.css';

class App extends Component {
      constructor(props) {
        super(props);
        this.getData = this.getData.bind(this);

        this.state = {
          weatherData: '',
          loadedData: false
        }
    }

  getData = (city) => {
    // get data based on username
    axios({
        url: `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=${apiKey}`,
        method: 'get'
    }).then(response => {
        // get the userID
        // console.log(response.data);
        this.setState({
          weatherData: response.data,
          loadedData: true
        })

    }).catch(error => { 
        console.log('Error fetching and parsing data', error);
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Weather</h1>
        <Search getData={this.getData}/>

        {this.state.loadedData ? <Weather weatherData={this.state.weatherData}/> : null}
          
      </div>
    );
  }
}

export default App;
