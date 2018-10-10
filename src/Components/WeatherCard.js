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

    var imgIcon;

    if(weather.weather[4].weather[0].id >= 801) {
        imgIcon = weatherMapping.cloudyDay[0];
    } else if (weather.weather[4].weather[0].id === 800) {
        imgIcon = weatherMapping.day;
    } else if(weather.weather[4].weather[0].id >= 701 && weather.weather[4].weather[0].id <= 781) {
        imgIcon = weatherMapping.cloudy;
    } else if(weather.weather[4].weather[0].id >= 600 && weather.weather[4].weather[0].id <= 622) {
        imgIcon = weatherMapping.snowyDay[0];
    } else if(weather.weather[4].weather[0].id >= 500 && weather.weather[4].weather[0].id <= 531) {
        imgIcon = weatherMapping.rainyDay[0];
    } else if(weather.weather[4].weather[0].id >= 300 && weather.weather[4].weather[0].id <= 321) {
        imgIcon = weatherMapping.rainyDay[1];
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