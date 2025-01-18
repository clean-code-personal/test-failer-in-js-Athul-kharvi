const {expect} = require('chai');

// This is a stub for a weather sensor. For the sake of testing
// we create a stub that generates weather data and allows us to
// test the other parts of this application in isolation
// without needing the actual Sensor during development
// Later, this can be replaced with the actual interface to the sensor.
const sunnySensorStub = {
    humidity: () => 50,
    precipitation: () => 10,
    temperatureInC: () => 30,
    windspeedInKmph: () => 15,
};

const rainySensorStub = {
    humidity: () => 80,
    precipitation: () => 65,
    temperatureInC: () => 26,
    windspeedInKmph: () => 40,
};

const stormySensorStub = {
    humidity: () => 85,
    precipitation: () => 70,
    temperatureInC: () => 26,
    windspeedInKmph: () => 55,
};


function report(sensor) {
    const precipitation = sensor.precipitation();
    const temperature = sensor.temperatureInC();
    const windspeed = sensor.windspeedInKmph();

    if (temperature > 25) {
        if (precipitation > 20 && precipitation <= 60) {
            return 'Partly cloudy';
        } else if (precipitation > 60 && windspeed <= 50) {
            return 'Rainy day';
        } else if (windspeed > 50) {
            return 'Alert: Stormy with heavy rain';
        }
    }
    return 'Sunny day';
}

// Tests
function testSunnyDay() {
    const weatherReport = report(sunnySensorStub);
    console.log(`Sunny Day Report: ${weatherReport}`);
    expect(weatherReport).to.equal('Sunny day');
}

function testRainyDay() {
    const weatherReport = report(rainySensorStub);
    console.log(`Rainy Day Report: ${weatherReport}`);
    expect(weatherReport).to.equal('Rainy day');
}

function testStormyDay() {
    const weatherReport = report(stormySensorStub);
    console.log(`Stormy Day Report: ${weatherReport}`);
    expect(weatherReport).to.equal('Alert: Stormy with heavy rain');
}

// Run Tests
testSunnyDay();
testRainyDay();
testStormyDay();
console.log('All tests passed successfully!');
