const { expect } = require('chai');

function report(sensor) {
    const precipitation = sensor.precipitation();
    let reportOut = 'Sunny day';
    if (sensor.temperatureInC() > 25) {
        if (precipitation > 20 && precipitation < 60) {
            reportOut = 'Partly cloudy';
        } else if (sensor.windspeedInKmph() > 50) {
            reportOut = 'Alert: Stormy with heavy rain';
        }
    }
    return reportOut;
}

module.exports = { report };
