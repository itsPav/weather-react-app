const cloudyDay1 = require('../imgs/weather/animated/cloudy-day-1.svg')
const cloudyDay2 = require('../imgs/weather/animated/cloudy-day-2.svg')
const cloudyDay3 = require('../imgs/weather/animated/cloudy-day-3.svg')
const cloudyNight1 = require('../imgs/weather/animated/cloudy-night-1.svg')
const cloudyNight2 = require('../imgs/weather/animated/cloudy-night-2.svg')
const cloudyNight3 = require('../imgs/weather/animated/cloudy-night-3.svg')
const cloudy = require('../imgs/weather/animated/cloudy.svg')

const rainy1 = require('../imgs/weather/animated/rainy-1.svg')
const rainy2 = require('../imgs/weather/animated/rainy-2.svg')
const rainy3 = require('../imgs/weather/animated/rainy-3.svg')
const rainy4 = require('../imgs/weather/animated/rainy-4.svg')
const rainy5 = require('../imgs/weather/animated/rainy-5.svg')
const rainy6 = require('../imgs/weather/animated/rainy-6.svg')
const rainy7 = require('../imgs/weather/animated/rainy-7.svg')

const snowy1 = require('../imgs/weather/animated/snowy-1.svg')
const snowy2 = require('../imgs/weather/animated/snowy-2.svg')
const snowy3 = require('../imgs/weather/animated/snowy-3.svg')
const snowy4 = require('../imgs/weather/animated/snowy-4.svg')
const snowy5 = require('../imgs/weather/animated/snowy-5.svg')
const snowy6 = require('../imgs/weather/animated/snowy-6.svg')

const day = require('../imgs/weather/animated/day.svg')
const night = require('../imgs/weather/animated/night.svg')
const thunder = require('../imgs/weather/animated/thunder.svg')

var weatherMapping = {
    cloudyDay: {
        img: animatedCloudyDay,
        mapping: 
    },
    rainyDay: animatedRainyDay,
    cloudy: cloudy,
    day: day,
    night: night,
    thunder: thunder
}

export default weatherMapping;