import React from 'react';
import weatherMapping from './config/weatherMapping';

const WeatherCard = (weather) => {
    console.log(weather);
    // get the average weather
    var temp = 0;
    var weatherDescription = '';

    weather.weather.forEach(element => {
        if(element.main.temp > temp) {
            temp = element.main.temp;
            weatherDescription = element.weather[0].main;
        }
    })
    // console.log(weather);

    var date = new Date(weather.weather[0].dt_txt);

    var monthName = date.toLocaleDateString('en-US', {month: 'long'});
    var dayName = date.toLocaleDateString('en-US', {weekday: 'long'});
    var dayNum = date.toLocaleDateString('en-US', {day: 'numeric'});

    if(weather.weather[4].weather[0].id >= 801) {
        var imgIcon = weatherMapping.cloudyDay;
    }

    return(
        <div className="weatherCard">
            <p>{Math.round(temp)}&#8451;</p>
            <p>{dayName}</p>
            <p>{monthName} {dayNum}</p>
            <p>{weatherDescription}</p>
            <img src={imgIcon} alt={weather.weather[4].weather[0].description}></img>
        </div>
    )
}

export default WeatherCard;