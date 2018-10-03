import React from 'react';

const WeatherCard = (weather) => {
    console.log(weather);

    var date = new Date(weather.weather.dt_txt);

    var monthName = date.toLocaleDateString('en-US', {month: 'long'});
    var dayName = date.toLocaleDateString('en-US', {weekday: 'long'});
    var dayNum = date.toLocaleDateString('en-US', {day: 'numeric'});

    

    var imgIcon = `http://openweathermap.org/img/w/${weather.weather.weather[0].icon}.png`;

    return(
        <div className="weatherCard">
            <p>{Math.round(weather.weather.main.temp)}&#8451;</p>
            <p>{dayName}</p>
            <p>{monthName} {dayNum}</p>
            <p>{weather.weather.weather[0].main}</p>
            <img src={imgIcon} alt={weather.weather.weather[0].description}></img>
        </div>
    )
}

export default WeatherCard;