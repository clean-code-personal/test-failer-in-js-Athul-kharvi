const { expect } = require('chai');
const { report } = require('../src/weatherreport');

// Test for rainy weather
describe('Weather Report Tests', function () {
    it('should detect rain in the report when there is high wind speed and precipitation', function () {
        const weatherSensorStub = {
            humidity: () => 72,
            precipitation: () => 70, // High precipitation
            temperatureInC: () => 26, // High temperature
            windspeedInKmph: () => 52, // High windspeed
        };

        const weatherReport = report(weatherSensorStub);
        console.log(weatherReport);
        expect(weatherReport).to.include('rain');
    });

    

    it('should detect partly cloudy weather for moderate precipitation', function () {
        const customStub = {
            humidity: () => 60,
            precipitation: () => 40, // Moderate precipitation (20 < p < 60)
            temperatureInC: () => 27, // High temperature (>25)
            windspeedInKmph: () => 30, // Low wind-speed
        };

        const weatherReport = report(customStub);
        console.log(weatherReport);
        expect(weatherReport).to.equal('Partly cloudy');
    });

    it('should report sunny day for low precipitation and low wind speed', function () {
        const customStub = {
            humidity: () => 50,
            precipitation: () => 10, // Low precipitation
            temperatureInC: () => 26, // High temperature (>25)
            windspeedInKmph: () => 10, // Low wind-speed
        };

        const weatherReport = report(customStub);
        console.log(weatherReport);
        expect(weatherReport).to.equal('Sunny day');
    });

    it('should alert for stormy weather with heavy rain', function () {
        const customStub = {
            humidity: () => 65,
            precipitation: () => 80, // High precipitation (>60)
            temperatureInC: () => 26, // High temperature (>25)
            windspeedInKmph: () => 55, // High wind-speed (>50)
        };

        const weatherReport = report(customStub);
        console.log(weatherReport);
        expect(weatherReport).to.equal('Alert: Stormy with heavy rain');
    });


   
    it('should detect rain in the report when there is high precipitation and low wind', function () {
        const RainyDayStub = {
            temperatureInC: () => 28,
            precipitation: () => 70, // High precipitation
            windspeedInKmph: () => 40, // Low wind speed
        };

        const weatherReport = report(RainyDayStub);
        console.log(weatherReport);
        expect(weatherReport).to.equal('Alert: rainy day');
    });
});
