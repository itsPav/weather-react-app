import React from 'react';
import WeatherCard from './WeatherCard';

const Weather = (weatherData) => {

    const data = weatherData;
    let weatherCards = [];

    console.log(data.weatherData);

    if(data.weatherData.list.length > 0) {
        weatherCards = data.weatherData.list.map((weather, index) => {
            if(index % 4 === 0) {
                return <WeatherCard key={index} weather={weather}/>
            }
        });
    }

    return(
        <div className="weatherContainer">
            {weatherCards}
        </div>
    )
}

export default Weather;