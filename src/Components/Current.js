import React from 'react';
import weatherMapping from './config/weatherMapping';

const Current = (weather) => {

    const data = weather.weather;
    var imgIcon;

    if(data.weather[0].id >= 801) {
        imgIcon = weatherMapping.cloudyDay[0];
    } else if (data.weather[0].id === 800) {
        imgIcon = weatherMapping.day;
    } else if(data.weather[0].id >= 701 && data.weather[0].id <= 781) {
        imgIcon = weatherMapping.day;
    } else if(data.weather[0].id >= 600 && data.weather[0].id <= 622) {
        imgIcon = weatherMapping.snowy1;
    } else if(data.weather[0].id >= 500 && data.weather[0].id <= 531) {
        imgIcon = weatherMapping.rainy1;
    } else if(data.weather[0].id >= 300 && data.weather[0].id <= 321) {
        imgIcon = weatherMapping.rainy4;
    }

    return(
        <div className="currentWeather">
            <p>{data.name}</p>
            <p>{Math.round(data.main.temp)}&#8451;</p>
            <p>High: {Math.round(data.main.temp_max)}&#8451;</p>
            <p>Low: {Math.round(data.main.temp_min)}&#8451;</p>
            <img src={imgIcon} alt={data.weather[0].description}></img>
            <p>{data.wind.speed} km/h</p>
        </div>
    )
}

export default Current;