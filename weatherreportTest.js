const { expect } = require('chai');
const { report } = require('./weatherreport');

describe('report function', () => {
    const weatherSensorStub = {
        humidity: () => 72,
        precipitation: () => 70,
        temperatureInC: () => 26,
        windspeedInKmph: () => 52,
    };

    it('should report rain with high precipitation and stormy conditions', () => {
        const weatherReport = report(weatherSensorStub);
        expect(weatherReport).to.include('rain');
    });

    it('should report partly cloudy with high precipitation but no storm', () => {
        const customStub = {
            humidity: () => 60,
            precipitation: () => 75,
            temperatureInC: () => 26,
            windspeedInKmph: () => 45,
        };
        const weatherReport = report(customStub);
        expect(weatherReport).to.include('rain');
    });
});
