const { expect } = require('chai');

function print_color_map() {
    const majorColors = ["White", "Red", "Black", "Yellow", "Violet"];
    const minorColors = ["Blue", "Orange", "Green", "Brown", "Slate"];
    for (let i = 0; i < majorColors.length; i++) {
        for (let j = 0; j < minorColors.length; j++) {
            console.log(`${i * 5 + j} | ${majorColors[i]} | ${minorColors[j]}`);
        }
    }
    return majorColors.length * minorColors.length;
}

// Run the function
result = print_color_map();
expect(result).equals(25); 
expect(`0 | White | Blue`).to.equal(" 0  | White     | Blue"); // Misaligned output (fails)
expect(`24 | Violet | Slate`).to.equal("24  | Violet    | Slate"); // Misaligned output (fails)
console.log('All is well (maybe!)');
