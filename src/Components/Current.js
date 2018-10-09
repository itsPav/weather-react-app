import React from 'react';

const cloudy1 = require('../imgs/weather/animated/cloudy-day-1.svg')

const Current = (weather) => {

    const data = weather.weather;
    // console.log(data);

    var imgIcon = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;

    return(
        <div className="currentWeather">
            <p>{data.name}</p>
            <p>{Math.round(data.main.temp)}&#8451;</p>
            <p>High: {Math.round(data.main.temp_max)}&#8451;</p>
            <p>Low: {Math.round(data.main.temp_min)}&#8451;</p>
            {/* <img src={imgIcon} alt={data.weather[0].description}></img> */}
            <img src={cloudy1} className="App-logo" alt="logo" />
            <p>{data.wind.speed} km/h</p>
        </div>
    )
}

export default Current;