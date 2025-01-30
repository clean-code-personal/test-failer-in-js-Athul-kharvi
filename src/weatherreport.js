const { expect } = require('chai');

function report(sensor) {
    const temperature = sensor.temperatureInC();
    const precipitation = sensor.precipitation();
    const windspeed = sensor.windspeedInKmph();

    if (temperature > 25) {
        if (precipitation >= 60) {
            return windspeed < 50 ? 'Alert: Rainy day' : 'Alert: Stormy with heavy rain';
        }
        if (precipitation > 20) return 'Partly cloudy';
    }

    return 'Sunny day';
}

module.exports = { report };



