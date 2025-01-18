const {expect} = require('chai')

function generateColorMap() {
    const majorColors = ["White", "Red", "Black", "Yellow", "Violet"];
    const minorColors = ["Blue", "Orange", "Green", "Brown", "Slate"];
    const colorMap = [];

    for (let i = 0; i < majorColors.length; i++) {
        for (let j = 0; j < minorColors.length; j++) {
            colorMap.push({ index: i * 5 + j, major: majorColors[i], minor: minorColors[j] });
        }
    }
    return colorMap;
}

function formatEntry(entry) {
    return `${entry.index} | ${entry.major} | ${entry.minor}`;
}

function printColorMap() {
    const colorMap = generateColorMap();
    colorMap.forEach(entry => console.log(formatEntry(entry)));
    return colorMap.length;
}

// Strengthen the tests
const colorMap = generateColorMap();
expect(colorMap.length).to.equal(25);
expect(formatEntry(colorMap[0])).to.equal('0 | White | Blue');
expect(formatEntry(colorMap[24])).to.equal('24 | Violet | Slate');
console.log('Tests strengthened for misaligned!');


