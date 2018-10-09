import React from 'react';
import WeatherCard from './WeatherCard';

const Weather = (forecastWeather) => {

    const data = forecastWeather.forecastWeather.list;
    let weatherCards = [];
    var dailyData = {};

    // get weather data and separate it by day
    if(data.length > 0) {
        data.forEach(element => {
            // create object key with data
            if(!dailyData.hasOwnProperty(new Date(element.dt_txt).toLocaleDateString()) && new Date(element.dt_txt).toLocaleDateString() !== new Date().toLocaleDateString()) {
                dailyData[new Date(element.dt_txt).toLocaleDateString()] = [];
            }
            // add data that have matching object keys
            if(dailyData.hasOwnProperty(new Date(element.dt_txt).toLocaleDateString())) {
                dailyData[new Date(element.dt_txt).toLocaleDateString()].push(element);
                };
            })
    }

    for(var dailyWeather in dailyData) {
        weatherCards.push(dailyData[dailyWeather])
    }

    weatherCards = weatherCards.map((weather, index) => {
        return <WeatherCard key={index} weather={weather}/>
    });

    return(
        <div className="weatherContainer">
            {weatherCards}
        </div>
    )
}

export default Weather;