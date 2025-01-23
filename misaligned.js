const { expect } = require('chai');

function print_color_map() {
    const majorColors = ["White", "Red", "Black", "Yellow", "Violet"];
    const minorColors = ["Blue", "Orange", "Green", "Brown", "Slate"];
    for (let i = 0; i < majorColors.length; i++) {
        for (let j = 0; j < minorColors.length; j++) {
            const pairNumber = i * 5 + j + 1; // Start numbering from 1
            const entry = `${pairNumber}  | ${majorColors[i]}     | ${minorColors[j]}`;
            Result.push(entry);
        }
    }
    return Result;
}

// Run the function
const Result = print_color_map();
expect(Result.length).equals(25); 
expect(Result[0]).to.equal("1  | White     | Blue");
expect(Result[24]).to.equal("25  | Violet    | Slate");
console.log('All is well (maybe!)');
