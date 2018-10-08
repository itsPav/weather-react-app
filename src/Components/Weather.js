import React from 'react';
import WeatherCard from './WeatherCard';

const Weather = (forecastWeather) => {

    const data = forecastWeather;
    let weatherCards = [];

    // console.log(data.forecastWeather);

    if(data.forecastWeather.list.length > 0) {
        weatherCards = data.forecastWeather.list.map((weather, index) => {
            return <WeatherCard key={index} weather={weather}/>
        });
    }

    return(
        <div className="weatherContainer">
            {weatherCards}
        </div>
    )
}

export default Weather;